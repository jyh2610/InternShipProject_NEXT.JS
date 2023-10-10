"use strict";

const member = require("../models/member");
const auth = require("../models/auth");

const {pool} = require("../db/member");

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
// const axios = require("axios"); // 소셜로그인 구현시 필요
const { detectError } = require("../utils/detectError");

//local SignUp
const localSignUp = async (nickname, user_name, email, password, birthday, nation, sex) => {
  const pwValidation = new RegExp(
    "^(?=.*[A-Z])(?=.*[0-9])(?=.*[@$!%*?&])[A-Za-z0-9@$!%*?&]{8,20}$"
    // 비밀번호는 최소 하나의 대문자, 숫자, 특수문자(@$!%*?&)를 포함하고, 길이는 8에서 20자
  );
  if (!pwValidation.test(password)) detectError("PASSWORD-ERROR", 400);

  const emailValidation = new RegExp("^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$");
  if (!emailValidation.test(email)) detectError("EMAIL-ERROR", 400);

  const salt = await bcrypt.genSalt(Number(process.env.SALT_ROUND));
  const hashedPassword = await bcrypt.hash(password, salt);
  const hashedEmail = await bcrypt.hash(email, salt);
  const hashedbirthday = await bcrypt.hash(birthday.toString(), salt);
  

  const memberConnection = await pool.getConnection(); // member 데이터베이스 연결 얻기
  const authConnection = await auth.getConnection(); // auth 데이터베이스 연결 얻기
  
  try {
    await memberConnection.beginTransaction();
    await authConnection.beginTransaction();

    const ismember = await member.getMember(user_name);
    if (ismember) detectError("EXISITING_NAME", 400);

    await member.registerMember(user_name, 1);

    const user_no = (await member.getMember(user_name)).user_no;

    await Promise.all([
      auth.registerPassword(user_no, salt, hashedPassword),
      member.registerProfile(user_no, nickname),
      member.registerAuthentication(user_no, 1, null, hashedEmail, hashedbirthday, nation, sex),
    ]);

    await memberConnection.commit();
    await authConnection.commit();

    return { success: true };

  } catch (err) {
    await memberConnection.rollback();
    await authConnection.rollback();
    throw err;
  } finally {
    memberConnection.disconnect();
    authConnection.disconnect();
  }
};

//local SignIn
const localSignIn = async (user_name, password) => {
  //유저 네임에 맞는 유저 넘버, 유저 넘버에 맞는 salt 가져오기
  const user_no = await member.getMember(user_name).user_no; //user의 user_no 검색
  const auth_password = await auth.getPassword(user_no); // user_no에 해당하는 auth.password 테이블 조회
  const hashedPassword = auth_password.password; // 저장된 user의 password(hased)
  if (!hashedPassword)
    // 저장된 password 가 없으면 에러
    detectError("PASSWORD_DOSE_NOT_FOUND", 400);

  const usersalt = auth_password.salt; //user의 salt값
  const hasedInputPassword = await bcrypt.hash(password, usersalt); // 입력한 password 암호화
  const compare = await bcrypt.compare(hashedPassword, hasedInputPassword); // 비교
  if (!compare)
    // 입력한 것이 다르면 에러
    detectError("PASSWORD_DOSE_NOT_MATCH", 400);

  const payLoad = { user_no }; // jwt를 생성할 payload 지정
  const Token = jwt.sign(payLoad, Process.env.JWT_SECRET);

  return Token;
};

module.exports = {
  localSignUp,
  localSignIn,
};
