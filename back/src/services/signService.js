"use strict";

const {auth, member} = require("../models/all");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const axios = require("axios");
const { detectError } = require("../utils/detectError");

//local SignUp
const localSignUp = async (user) => {
  const pwValidation = new RegExp(
    "^(?=.*[A-Z])(?=.*[0-9])(?=.*[@$!%*?&])[A-Za-z0-9@$!%*?&]{8,20}$"
    // 비밀번호는 최소 하나의 대문자, 숫자, 특수문자(@$!%*?&)를 포함하고, 길이는 8에서 20자
  );

  if (!pwValidation.test(password))
    detectError(""

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
