"use strict";

const member = require("../models/member");
const auth = require("../models/auth");

const bcrypt = require("bcrypt");
const axios = require("axios");
const { detectError } = require("../utils/detectError");
const {generateTokens} = require("../utils/token");

//local SignUp
const localSignUp = async (nickname, name, user_name, email, password, birthday, nation, sex) => {
  const emailValidation = new RegExp("^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$");
  if (!emailValidation.test(email)) detectError("EMAIL-ERROR", 400); // 이메일 형식에 안 맞으면 에러

  // 비밀번호는 최소 하나의 대문자, 숫자, 특수문자(@$!%*?&)를 포함하고, 길이는 8에서 20자
  const pwValidation = new RegExp("^(?=.*[A-Z])(?=.*[0-9])(?=.*[@$!%*?&])[A-Za-z0-9@$!%*?&]{8,20}$");
  if (!pwValidation.test(password)) detectError("PASSWORD-ERROR", 400);

  if (user_name.length > 21) detectError("USER_NAME_TOO_LONG_ERROR", 400); 

  const existingName = await member.getMember(user_name);
    if (existingName) detectError("EXISITING_USER_NAME", 400); //아이디 중복이면 에러
  
  const existingNickname = await member.getProfileByNickname(nickname);
    if (existingNickname) detectError("EXISITING_NICKNAME", 400); // 닉네임 중복이면 에러 

  const salt = await bcrypt.genSalt(Number(process.env.SALT_ROUND));
  const hashedPassword = await bcrypt.hash(password, salt);
  // const hashedEmail = await bcrypt.hash(email, salt);
  // const hashedbirthday = await bcrypt.hash(birthday.toString(), salt);

  await member.registerMember(user_name, 0);

  const user_no = (await member.getMember(user_name)).user_no;

  await Promise.all([
    auth.registerPassword(user_no, salt, hashedPassword),
    member.registerProfile(user_no, nickname, name),
    member.registerAuthentication(user_no, 1, null, email, birthday.toString(), nation, sex),
  ]);

  return {message: "User Created success", success: true };
};

//local SignIn
const localSignIn = async (user_name, password) => {
  //유저 네임에 맞는 유저 넘버, 유저 넘버에 맞는 salt 가져오기
  const user = await member.getMember(user_name); //user의 user_no 검색
  if (!user) detectError("NOT_EXISTING_MEMBER", 400);

  const user_no = user.user_no;
  const auth_password = (await auth.getPassword(user_no)); // user_no에 해당하는 auth.password 테이블 조회
  const hashedPassword = auth_password.password; // 저장된 user의 password(hased)

  const usersalt = auth_password.salt; //user의 salt값
  const hashedInputPassword = await bcrypt.hash(password, usersalt); // 입력한 password 암호화

  if(hashedInputPassword !== hashedPassword) detectError("PASSWORD_DOSE_NOT_MATCH", 400);
  return await generateTokens(user_no);
};

//signOut
const signOut = async (user_no) => {
  return await member.deleteRefreshToken(user_no);
};

//소셜로그인
const socialLogin = async (accessToken, url, social_code) => {
  console.log("\n\n\naccessToken", accessToken, "\n\n\n");
  
  try {
    const result = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
      },
    });

    if (!result) {
      detectError(`${social_code}_TOKEN_ERROR`, 400);
    }

    const { data } = result;
    const external_id = String(social_code === 3 ? data.response.id : data.id);
    const nickname = social_code === 3 ? data.response.name : (social_code === 2 ? data.properties.nickname : data.name);
    

    let social_user = await member.getMember(external_id);

    if (!social_user) {
      await member.registerMember(external_id, 1);
      social_user = await member.getMember(external_id);

      await Promise.all([
        auth.registerSocial_login(social_user.user_no, social_code, external_id, accessToken),
        member.registerProfile(social_user.user_no, nickname)
      ]);

      return await generateTokens(social_user.user_no);
    }
    await auth.updateSocial_login(external_id, accessToken);

    return await generateTokens(social_user.user_no);

  } catch (err) {
    console.error(err.message);
    detectError("INVALID_TOKEN", 400);
  }
};

const googleLogin = async (googleToken) => {
  const url = "https://www.googleapis.com/userinfo/v2/me";
  const social_code = 1;
  return await socialLogin(googleToken, url, social_code);
};

const kakaoLogin = async (kakaoToken) => {
  const url = "https://kapi.kakao.com/v2/user/me";
  const social_code = 2;
  return await socialLogin(kakaoToken, url, social_code);
};

const naverLogin = async (naverToken) => {
  const url = "https://openapi.naver.com/v1/nid/me";
  const social_code = 3;
  return await socialLogin(naverToken, url, social_code);
};


module.exports = {
  localSignUp,
  localSignIn,
  signOut,                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             

  kakaoLogin,
  naverLogin,
  googleLogin  
};
