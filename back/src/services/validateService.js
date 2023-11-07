"use strict";

const member = require("../models/member");
const verification = require('../models/verification');

const sendEmail = require('../utils/email/sendEmail');
const generateRandomStr = require('../utils/generateRandomStr');
const { detectError } = require("../utils/detectError");


// 아이디 중복 체크
const isDuplicateUsername = async (user_name) => {
  if (await member.getMember(user_name)) return { message: "DUPLICATE_USER_NAME", success: false };
  return { message: "POSSIBLE_USER_NAME", success: true };
};
// 닉네임 중복 체크
const isDuplicateNickname = async (nickname) => {
  if (await member.getProfileByNickname(nickname)) return { message: "DUPLICATE_NICKNAME", success: false };
  return { message: "POSSIBLE_NICKNAME", success: true };
};
// 이메일 중복체크
const isDuplicateEmail = async (email) => {
  if (await member.getUserNoByEmail(email)) return { message: "DUPLICATE_EMAIL", success: false };
  return { message: "POSSIBLE_EMAIL", success: true };
};

// //local signUpCheck
// const signUpCheck = async (nickname) =>{
//   const profile = await member.getProfileByNickname(nickname);
//   if (!profile) detectError("NOT_EXITST_NICKNAME", 400);
//   return { name: profile.name, join_date: profile.join_date, success: true}
// }

// 이메일로 코드 전송
const emailValidation = async (email) => {
  const emailValidation = new RegExp("^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$");
  if (!emailValidation.test(email)) detectError("EMAIL-ERROR", 400); // 이메일 형식에 안 맞으면 에러

  const code = generateRandomStr("code", 6); // 6자리 랜덤 코드 생성

  //db에 email과 code
  //이미 db에 email이 있다면, 삭제후 다시 저장
  //없다면 저장
  if (await verification.getVerifying(email)) await verification.deleteVerifying(email);
  await verification.generateVerifying(email, code);

  return await sendEmail(email, code);
};
// 이메일 인증 코드 검사
const verifyCode = async (email, code) => {
    const row = await verification.getVerifying(email);
    if (!row) return { message: "CODE_NOT_SENT", success: false };
  
    //인증 시간이 지났으면 실패
    if (row.expired_at < new Date()) return { message: "VERIFYING_TIME_OUT", success: false };
  
    if (row.email !== email || row.code !== code) return { message: "INVALID_EMAIL_OR_CODE", success: false };
  
    // await verification.deleteVerifying(email); //인증 완료후 삭제하는 것 고려 => 주기적으로 테이블 비워주는게 나을 듯?
    return { message: "VERIFIED", success: true };
};

module.exports = {
  isDuplicateUsername,
  isDuplicateNickname,
  isDuplicateEmail,
  // signUpCheck,

  emailValidation,
  verifyCode
};
