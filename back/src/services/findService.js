"use strict";

const member = require("../models/member");
const auth = require("../models/auth");

const bcrypt = require("bcrypt");
const { detectError } = require("../utils/detectError");

// email에 해당하는 id 마스킹하여 반환
const idList = async (email) => {
    const emailValidation = new RegExp("^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$");
    if (!emailValidation.test(email)) detectError("EMAIL-ERROR", 400); // 이메일 형식에 안 맞으면 에러
    
    const user = await member.getUserNoByEmail(email);
    if (!user) detectError("NOT_A_MEMBER_NAME", 400);

    const user_name = (await member.getUserName(user.user_no)).user_name;

    return {success: true, user_name: transformId(user_name)};
};

const resetPassword = async (user_name, email, password) => {
    const userGetByUserName = await member.getMember(user_name);
    if(!userGetByUserName) detectError("NOT_A_MEMBER_ID", 400);

    const userGetByEmail = await member.getUserNoByEmail(email);
    if(!userGetByEmail) detectError("NOT_A_MEMBER_EMAIL", 400);

    if(userGetByUserName.user_no !== userGetByEmail.user_no) detectError("ID_AND_EMAIL_DOES_NOT_MATCH", 400);

    const salt = await bcrypt.genSalt(Number(process.env.SALT_ROUND));
    const hashedPassword = await bcrypt.hash(password, salt);
    // 비밀번호 변경후 로그인시 비밀번호 검증이 안됨
    await auth.updatePassword(userGetByEmail.user_no, salt, hashedPassword);

    return {success: true, message: "Password reset!"}
};

// 절반 '*' 처리하는 함수(마지막 1글자는 원문)
function transformId(id) {
    const length = id.length;
    const firstHalf = id.slice(0, Math.floor(length / 2)); // 첫 번째 절반
    const secondHalf = id.slice(Math.floor(length / 2)); // 나머지 절반
  
    const transformedSecondHalf = secondHalf.replace(/./g, '*'); // 두 번째 절반을 모두 *로 변환
    const lastChar = secondHalf.slice(-1); // 두 번째 절반의 마지막 문자
  
    return firstHalf + transformedSecondHalf.slice(0, -1) + lastChar;
}

module.exports = {
    idList,
    resetPassword
};
