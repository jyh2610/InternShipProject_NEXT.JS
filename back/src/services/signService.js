"use strict";

const member = require("../models/member");
const auth = require("../models/auth");
const verification = require("../models/verification");

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const axios = require("axios");
const { detectError } = require("../utils/detectError");

const sendEmail = require('../utils/sendEmail');
const generateRandomStr = require('../utils/generateRandomStr');

//local SignUp
const localSignUp = async (nickname, name, user_name, email, password, birthday, nation, sex) => {
  const emailValidation = new RegExp("^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$");
  if (!emailValidation.test(email)) detectError("EMAIL-ERROR", 400); // 이메일 형식에 안 맞으면 에러

  // 비밀번호는 최소 하나의 대문자, 숫자, 특수문자(@$!%*?&)를 포함하고, 길이는 8에서 20자
  const pwValidation = new RegExp("^(?=.*[A-Z])(?=.*[0-9])(?=.*[@$!%*?&])[A-Za-z0-9@$!%*?&]{8,20}$");
  if (!pwValidation.test(password)) detectError("PASSWORD-ERROR", 400);

  if (user_name.length > 20) detectError("USER_NAME_TOO_LONG_ERROR", 400); 

  const existingName = await member.getMember(user_name);
    if (existingName) detectError("EXISITING_USER_NAME", 400); //아이디 중복이면 에러
  
  const existingNickname = await member.getProfileByNickname(nickname);
    if (existingNickname) detectError("EXISITING_NICKNAME", 400); //아이디 중복이면 에러

  const salt = await bcrypt.genSalt(Number(process.env.SALT_ROUND));
  const hashedPassword = await bcrypt.hash(password, salt);
  const hashedEmail = await bcrypt.hash(email, salt);
  const hashedbirthday = await bcrypt.hash(birthday.toString(), salt);

  await member.registerMember(user_name, 0);

  const user_no = (await member.getMember(user_name)).user_no;

  await Promise.all([
    auth.registerPassword(user_no, salt, hashedPassword),
    member.registerProfile(user_no, nickname, name),
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
// 닉네임 중복 체크
const isDuplicateNickname = async (nickname) => {
  if (await member.getProfileByNickname(nickname))
    return({message:"DUPLICATE_NICKNAME", success: false});
  return {message:"POSSIBLE_NICKNAME", success: true};
};
// 이메일로 코드 전송
const emailValidation = async(email) => {
  const emailValidation = new RegExp("^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$");
  if (!emailValidation.test(email)) detectError("EMAIL-ERROR", 400); // 이메일 형식에 안 맞으면 에러

  const code = generateRandomStr("code", 6); // 6자리 랜덤 코드 생성

  //db에 email과 code
  //이미 db에 email이 있다면, 삭제후 다시 저장
  //없다면 저장
  if(await verification.getVerifying(email)) await verification.deleteVerifying(email);
  await verification.generateVerifying(email, code);

  return await sendEmail(email, code);
};

// 인증 코드 검사
const verifyCode = async(email, code) => {
  const row = await verification.getVerifying(email);
  if (!row) return {message: "CODE_NOT_SENT", success: false};

  //인증 시간이 지났으면 실패
  if (row.expired_at < new Date()) return {message: "VERIFYING_TIME_OUT", success: false};
  
  if ((row.email !== email)||(row.code !== code)) return {message: "INVALID_EMAIL_OR_CODE",success: false};

  await verification.deleteVerifying(email); //인증 완료후 삭제하는 것 고려
  return {message: "VERIFIED",success: true};
};

// kakako
const kakaoLogin = async (kakaoToken) => {
  const result = await axios.get("https://kapi.kakao.com/v2/user/me", {
    headers: {
      Authorization: `Bearer ${kakaoToken}`,
      "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
    },
  }).catch(err => {detectError("INVALID_TOKEN", 400);});

  if (!result) detectError("KAKAO_TOKEN_ERROR", 400);

  const { data } = result;
  const external_id = data.id;
  const nickname = data.properties.nickname;
  const social_code = 2;// kakao는 2로 설정함

  const social_user = await member.getMember(external_id);

  if (!social_user) {
    await member.registerMember(external_id, 1);

    const user_no = (await member.getMember(external_id)).user_no;

    await Promise.all([
      auth.registerSocial_login(user_no, social_code, external_id, kakaoToken),
      member.registerProfile(user_no, nickname)
    ]);

    return jwt.sign({user_no}, process.env.JWT_SECRET);
  }
  return jwt.sign({user_no: social_user.user_no}, process.env.JWT_SECRET);
};

// naver :3
const naverLogin = async (naverToken) => {
  const result = await axios.get("https://openapi.naver.com/v1/nid/me", {
    headers: {
      Authorization: `Bearer ${naverToken}`,
      "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
    },
  }).catch(err => {detectError("INVALID_TOKEN", 400);});

  if (!result) detectError("NAVER_TOKEN_ERROR", 400);

  const { data } = result;
  const external_id = data.response.id;
  const nickname = data.response.name;
  const social_code = 3;// naver는 3으로 설정함
  
  const social_user = await member.getMember(external_id);

  if (!social_user) {
    await member.registerMember(external_id, 1);

    const user_no = (await member.getMember(external_id)).user_no;

    await Promise.all([
      auth.registerSocial_login(user_no, social_code, external_id, naverToken),
      member.registerProfile(user_no, nickname)
    ]);

    return jwt.sign({user_no}, process.env.JWT_SECRET);
  }
  return jwt.sign({user_no: social_user.user_no}, process.env.JWT_SECRET);
};

// google: 1
const googleLogin = async (googleToken) => {
  const result = await axios.get("https://www.googleapis.com/userinfo/v2/me", {
    headers: {
      Authorization: `Bearer ${googleToken}`,
      "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
    },
  }).catch(err => {detectError("INVALID_TOKEN", 400);});

  if (!result) detectError("GOOGLE_TOKEN_ERROR", 400);

  const { data } = result;
  const external_id = data.id;
  const nickname = data.name;
  const social_code = 1;// google는 1로 설정함

  const social_user = await member.getMember(external_id);
  
  if (!social_user) {
    await member.registerMember(external_id, 1);

    const user_no = (await member.getMember(external_id)).user_no;

    await Promise.all([
      auth.registerSocial_login(user_no, social_code, external_id, googleToken),
      member.registerProfile(user_no, nickname)
    ]);

    return jwt.sign({user_no}, process.env.JWT_SECRET);
  }
  return jwt.sign({user_no: social_user.user_no}, process.env.JWT_SECRET);
};


module.exports = {
  localSignUp,
  localSignIn,
  isDuplicateUsername,
  isDuplicateNickname,
  emailValidation,
  verifyCode,

  kakaoLogin,
  naverLogin,
  googleLogin
};
