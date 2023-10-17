"use strict";

const member = require("../models/member");
const jwt = require("jsonwebtoken");

// AccessToken, RefreshToken 발급
const generateTokens = async (user_no) => {
  try {
    const payLoad = { user_no };

    const accessToken = jwt.sign(payLoad, process.env.JWT_SECRET, {
      expiresIn: "15m"
    });

    const refreshToken = jwt.sign(payLoad, process.env.REFRESH_JWT_SECRET, {
      expiresIn: "2week"
    });

    await member.deleteRefreshToken(user_no);
    await member.registerRefreshToken(user_no, refreshToken);

    return { accessToken, refreshToken, success: true };
  } catch (error) {
    return { success: false, message: error.message };
  }
};

// Access Token 검증 미들웨어
const validateToken = async (req, res, next) => {
    try {
        const decode = jwt.verify(req.headers.authorization.split(' ')[1], process.env.JWT_SECRET);
        const refreshToken = await member.getRefreshToken(decode.user_no);
        if (!refreshToken) {throw new Error();}
        req.user_no = decode.user_no; //request.user_no에 user_no를 담아 다음 모듈로 넘겨줌
        next();
    } catch(err){
        await res.status(401).json({message: "INVALID_ACCESS_TOKEN"})
        next(err);
    }
};

// RefreshToken으로 AccessToken 재발급
const reissuanceToken = async (refreshTokenToGetClient) => {
    try{
        const decode = jwt.verify(refreshTokenToGetClient, process.env.REFRESH_JWT_SECRET);

        if(refreshTokenToGetClient === (await member.getRefreshToken(decode.user_no)).refresh_token){ // 기존의 DB의 값과 같은지 확인
          const payLoad = { user_no : decode.user_no }
          const accessToken = jwt.sign( payLoad, process.env.JWT_SECRET, {
            expiresIn: "15m"
          });
          return {accessToken, success: true, message: "NEW_ACCESS_TOKEN_ISSUED"};
        }
        return {success: false, message: "INVALID_REFRESH_TOKEN1"};
    } catch(err){
        return {success: false, message: "INVALID_REFRESH_TOKEN"};
    }
};

module.exports = {
    generateTokens,
    validateToken,
    reissuanceToken
};