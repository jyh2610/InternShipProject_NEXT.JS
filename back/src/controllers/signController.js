"use strict";

const signService = require("../services/signService");
const {catchAsync, detectError} = require("../utils/detectError");

// local signUP
const signUp =  catchAsync(async(req, res) => {
    const {nickname, name, user_name, email, password, birthday, nation, sex} = req.body;
    if(!name || !user_name || !email || !password) detectError("KEY_ERROR", 400);

    const result = await signService.localSignUp(nickname, name, user_name, email, password, birthday, nation, sex);

    return res.status(201).json(result);
});

// local signIn
const signIn = catchAsync(async(req, res) => {
    const {user_name, password} = req.body;

    if (!user_name || !password) detectError("KEY_ERROR", 400);

    const result = await signService.localSignIn(user_name, password);

    return res.status(200).json(result);
});

// 카카오 로그인
const kakaoLogin = catchAsync(async (req, res) => {
    const kakaoToken = req.headers.authorization;

    if (!kakaoToken) detectError("NOT_ACCESS_TOKEN", 401);

    const result = await signService.kakaoLogin(kakaoToken.split(' ')[1]);

    return res.status(200).json(result);
});

// 네이버 로그인
const naverLogin = catchAsync(async (req, res) => {
    const naverToken = req.headers.authorization;
    
    if (!naverToken) detectError("NOT_ACCESS_TOKEN", 401);
    
    const result = await signService.naverLogin(naverToken.split(' ')[1]);

    return res.status(200).json(result);
});

// 구글 로그인
const googleLogin = catchAsync(async (req, res) => {
    const googleToken = req.headers.authorization;

    if (!googleToken) detectError("NOT_ACCESS_TOKEN", 401);

    const result = await signService.googleLogin(googleToken.split(' ')[1]);

    return res.status(200).json(result);

});

// 로그아웃
const signOut = catchAsync(async (req, res) => {
    await signService.signOut(req.user_no);
    return res.status(200).json({sucess: true, message: "SIGN_OUT_COMPLETED"});
});

module.exports ={
    signUp,
    signIn,
    signOut,

    kakaoLogin,
    naverLogin,
    googleLogin
};