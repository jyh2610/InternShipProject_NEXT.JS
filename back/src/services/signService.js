"use strict";

const member = require("../models/member");
const auth = require("../models/auth");
const verification = require("../models/verification");

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
// const axios = require("axios"); // 소셜로그인 구현시 필요
const { detectError } = require("../utils/detectError");

const sendEmail = require('../utils/sendEmail');
const generateRandomCode = require('../utils/generateRandomCode');

//local SignUp
const localSignUp = async (nickname, user_name, email, password, birthday, nation, sex) => {
  const pwValidation = new RegExp(
    "^(?=.*[A-Z])(?=.*[0-9])(?=.*[@$!%*?&])[A-Za-z0-9@$!%*?&]{8,20}$"
    // 비밀번호는 최소 하나의 대문자, 숫자, 특수문자(@$!%*?&)를 포함하고, 길이는 8에서 20자
  );
  if (!pwValidation.test(password)) detectError("PASSWORD-ERROR", 400);

  const emailValidation = new RegExp("^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$");
  if (!emailValidation.test(email)) detectError("EMAIL-ERROR", 400); // 이메일 형식에 안 맞으면 에러

  const ismember = await member.getMember(user_name);
    if (ismember) detectError("EXISITING_NAME", 400); //아이디 중복이면 에러

  const salt = await bcrypt.genSalt(Number(process.env.SALT_ROUND));
  const hashedPassword = await bcrypt.hash(password, salt);
  const hashedEmail = await bcrypt.hash(email, salt);
  const hashedbirthday = await bcrypt.hash(birthday.toString(), salt);
  

  // const memberConnection = await pool.getConnection(); // member 데이터베이스 연결 얻기
  // const authConnection = await auth.getConnection(); // auth 데이터베이스 연결 얻기
  
  // try {
  //   await memberConnection.beginTransaction();
  //   await authConnection.beginTransaction();

    await member.registerMember(user_name, 1);

    const user_no = (await member.getMember(user_name)).user_no;

    await Promise.all([
      auth.registerPassword(user_no, salt, hashedPassword),
      member.registerProfile(user_no, nickname),
      member.registerAuthentication(user_no, 1, null, hashedEmail, hashedbirthday, nation, sex),
    ]);

    // await memberConnection.commit();
    // await authConnection.commit();

    return { success: true };

  // } catch (err) {
  //   await memberConnection.rollback();
  //   await authConnection.rollback();
  //   throw err;
  // } finally {
  //   memberConnection.disconnect();
  //   authConnection.disconnect();
  // }
};

//local SignIn
const localSignIn = async (user_name, password) => {
  //유저 네임에 맞는 유저 넘버, 유저 넘버에 맞는 salt 가져오기
  const user_no = (await member.getMember(user_name)).user_no; //user의 user_no 검색
  if (!user_no)
    detectError("NOT_EXISTING_MEMBER", 400);

  const auth_password = (await auth.getPassword(user_no)); // user_no에 해당하는 auth.password 테이블 조회
  const hashedPassword = auth_password.password; // 저장된 user의 password(hased)

  const usersalt = auth_password.salt; //user의 salt값
  const hasedInputPassword = await bcrypt.hash(password, usersalt); // 입력한 password 암호화

  const compare = await bcrypt.compare(hasedInputPassword, hashedPassword); // 비교
  if (compare)
    // 입력한 것이 다르면 에러
    detectError("PASSWORD_DOSE_NOT_MATCH", 400);

  const payLoad = { user_no }; // jwt를 생성할 payload 지정
  console.log(payLoad)
  const Token = jwt.sign(payLoad, process.env.JWT_SECRET, {
    expiresIn: "15m"
  });

  return Token;
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

  return {message: "VERIFIED",success: true};
};




module.exports = {
  localSignUp,
  localSignIn,
  isDuplicateUsername,
  emailValidation,
  verifyCode
};
