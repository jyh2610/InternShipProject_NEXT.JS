"use strict";

const {auth, member} = require("../models/all");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const axios = require("axios");
const { detectError } = require("../utils/detectError");

//local SignUp
const localSignUp = async (nickname, user_name, email, password, birthday, nation, sex) => {
  const pwValidation = new RegExp(
    "^(?=.*[A-Z])(?=.*[0-9])(?=.*[@$!%*?&])[A-Za-z0-9@$!%*?&]{8,20}$"
    // 비밀번호는 최소 하나의 대문자, 숫자, 특수문자(@$!%*?&)를 포함하고, 길이는 8에서 20자
  );

  if (!pwValidation.test(password))
    detectError("PASSWORD-ERROR", 400);

  const salt = await bcrypt.genSalt(Number(process.env.SALT_ROUND));
  const hashedPassword = await bcrypt.hash(password, salt);
  const hashedEmail = await bcrypt.hash(email, salt);
  const hashedbirthday = await bcrypt.hash(birthday, salt);

  
  await member.registerMember(user_name, 1);
  const user_no = await member.getMember(user_name).user_no;
  
  await Promise.all(
    auth.registerPassword(user_no, salt, hashedPassword),
    member.registerProfile(user_no, nickname),
    member.registerAuthentication(user_no, 1, null, hashedEmail, hashedbirthday, nation, sex)
  );

  return {success: true};
};

//local SignIn
const localSignIn = async (user) => {};


const signIn = async (user_name, password) => {
  

  const hashedPassword = await userDao.getHashedPassword(email);
  if (!hashedPassword) detectError("PASSWORD_DOES_NOT_MATCH", 400);

  const compare = await bcrypt.compare(password, hashedPassword);
  if (!compare) detectError("PASSWORD_DOES_NOT_MATCH", 400);

  const [userData] = await userDao.getUserId(email);

  const payLoad = { userId: userData.id };

  const jwtToken = jwt.sign(payLoad, process.env.JWT_SECRET);

  return jwtToken;
};

module.exports = {
  localSignUp,
  localSignIn,
};
