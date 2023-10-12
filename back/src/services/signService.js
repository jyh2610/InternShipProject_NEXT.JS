"use strict";

const member = require("../models/member");
const auth = require("../models/auth");
const verification = require("../models/verification");

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const axios = require("axios");
const { detectError } = require("../utils/detectError");

const sendEmail = require('../utils/sendEmail');
const generateRandomCode = require('../utils/generateRandomCode');

//local SignUp
const localSignUp = async (nickname, user_name, email, password, birthday, nation, sex) => {
  const emailValidation = new RegExp("^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$");
  if (!emailValidation.test(email)) detectError("EMAIL-ERROR", 400); // 이메일 형식에 안 맞으면 에러

  // 비밀번호는 최소 하나의 대문자, 숫자, 특수문자(@$!%*?&)를 포함하고, 길이는 8에서 20자
  const pwValidation = new RegExp("^(?=.*[A-Z])(?=.*[0-9])(?=.*[@$!%*?&])[A-Za-z0-9@$!%*?&]{8,20}$");
  if (!pwValidation.test(password)) detectError("PASSWORD-ERROR", 400);

  const ismember = await member.getMember(user_name);
    if (ismember) detectError("EXISITING_NAME", 400); //아이디 중복이면 에러

  const salt = await bcrypt.genSalt(Number(process.env.SALT_ROUND));
  const hashedPassword = await bcrypt.hash(password, salt);
  const hashedEmail = await bcrypt.hash(email, salt);
  const hashedbirthday = await bcrypt.hash(birthday.toString(), salt);

  await member.registerMember(user_name, 0);

  const user_no = (await member.getMember(user_name)).user_no;

  await Promise.all([
    auth.registerPassword(user_no, salt, hashedPassword),
    member.registerProfile(user_no, nickname),
    member.registerAuthentication(user_no, 1, null, hashedEmail, hashedbirthday, nation, sex),
  ]);

  return {message: "User Created success", success: true };
};

//local SignIn
const localSignIn = async (user_name, password) => {
  //유저 네임에 맞는 유저 넘버, 유저 넘버에 맞는 salt 가져오기
  const user = await member.getMember(user_name); //user의 user_no 검색
  if (!user)
    detectError("NOT_EXISTING_MEMBER", 400);

  const user_no = user.user_no;
  const auth_password = (await auth.getPassword(user_no)); // user_no에 해당하는 auth.password 테이블 조회
  const hashedPassword = auth_password.password; // 저장된 user의 password(hased)

  const usersalt = auth_password.salt; //user의 salt값
  const hasedInputPassword = await bcrypt.hash(password, usersalt); // 입력한 password 암호화

  if(hasedInputPassword !== hashedPassword)
    detectError("PASSWORD_DOSE_NOT_MATCH", 400);
  else{
    const payLoad = { user_no }; // jwt를 생성할 payload 지정
    // console.log(payLoad)
    const Token = jwt.sign(payLoad, process.env.JWT_SECRET, {
      expiresIn: "15m"
    });

  return {accessToken: Token, success: true};
  }
};

// 아이디 중복 체크
const isDuplicateUsername = async (user_name) => {
  if (await member.getMember(user_name))
    return({message:"DUPLICATE_USER_NAME", success: false});
  return {message:"POSSIBLE_USER_NAME", success: true};
};

// 이메일로 코드 전송
const emailValidation = async(email) => {
  const emailValidation = new RegExp("^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$");
  if (!emailValidation.test(email)) detectError("EMAIL-ERROR", 400); // 이메일 형식에 안 맞으면 에러

  const code = generateRandomCode(); // 6자리 랜덤 코드 생성

  //db에 email과 code
  //이미 db에 email이 있다면, 삭제후 다시 저장
  //없다면 저장
  if(await verification.getVerifying(email)) await verification.deleteVerifying(email);
  await verification.generateVerifying(email, code);

  sendEmail(email, code).then(success => {
    return success ? {success: true} : {success: false};
  });
};

// 인증 코드 검사
const verifyCode = async(email, code) => {
  const row = await verification.getVerifying(email);
  if (!row) return {message: "CODE_NOT_SENT",success: false};

  //인증 시간이 지났으면 실패
  if (row.expired_at < new Date()) return {message: "VERIFYING_TIME_OUT", success: false};
  
  if ((row.email !== email)||(row.code !== code)) return {message: "INVALID_EMAIL_OR_CODE",success: false};

  await verification.deleteVerifying(email);
  return {message: "VERIFIED",success: true};
};

// kakako
const kakaoLogin = async (kakaoToken) => {
  const result = await axios.get("https://kapi.kakao.com/v2/user/me", {
    headers: {
      Authorization: `Bearer ${kakaoToken}`,
      "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
    },
  });

  if (!result) detectError("KAKAO_TOKEN_ERROR", 400);


  const { data } = result;
  const social_login_id = data.id;
  const nickname = data.properties.nickname;
  const email = data.kakao_account.email;
  const social_code = 2;// kakao는 2로 설정함
  const sex = data.kakao_account.gender; //male, female, 두 개 아니면 etc

  const social_user = await auth.getSocial_login(social_login_id);

  if (!social_user) {
    await member.registerMember(user_name, 1);

    const user_no = (await member.getMember(user_name)).user_no;

    await Promise.all([
      auth.registerSocial_login(social_login_id, user_no, social_code, kakaoToken),
      member.registerProfile(user_no, nickname),
      member.registerAuthentication(user_no, 1, null, hashedEmail, hashedbirthday, null, sex), // 성별 구조체로 처리, 이메일이랑 생일 암호화 할지 말지 결정
    ]);
    await member.createUser(
      socialId,
      nickname,
      email,
      socialTypeId
    );

  //   return (accessToken = jwt.sign(
  //     { userId: newUser.insertId },
  //     process.env.JWT_SECRET
  //   ));
  }
  return; //(accessToken = jwt.sign({ userId: userId }, process.env.JWT_SECRET));
};

// naver :3

// goolge: 1




module.exports = {
  localSignUp,
  localSignIn,
  isDuplicateUsername,
  emailValidation,
  verifyCode,

  kakaoLogin

};
