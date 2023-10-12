"use strict";

const signService = require("../services/signService");
const {catchAsync, detectError} = require("../utils/detectError");


// local signUP
const signUp =  catchAsync(async(req, res) => {
    const {nickname, user_name, email, password, birthday, nation, sex} = req.body;
    if(!user_name || !email || !password) detectError("KEY_ERROR", 400);

    const result = signService.localSignUp(nickname, user_name, email, password, birthday, nation, sex);

    return res.status(201).json(result);
});

// local signIn
const signIn = catchAsync(async(req, res) => {
    const {user_name, password} = req.body;

    if (!user_name || !password) detectError("KEY_ERROR", 400);

    const result = await signService.localSignIn(user_name, password);

    return res.status(200).json(result);
});

const hasId = catchAsync(async(req, res) => {
    const {user_name} = req.body;
    if (!user_name) detectError("KEY_ERROR", 400);

    return res.status(200).json(await signService.isDuplicateUsername(user_name));
});

const sendEmail = catchAsync(async(req, res) => {
    return res.status(200).json(await signService.emailValidation(req.body.email));
});

const verifyCode = catchAsync(async(req, res) => {
    const {email, code} = req.body;
    return res.status(200).json(await signService.verifyCode(email, code));
});

// 카카오 로그인
const kakaoLogin = catchAsync(async (req, res) => {
    const kakaoToken = req.headers.authorization;

    if (!kakaoToken) detectError("NOT_ACCESS_TOKEN", 401);

    const kakao_accessToken = await userService.kakaoLogin(kakaoToken);

    return res.status(200).json({ accessToken: kakao_accessToken });
});

// 네이버 로그인
const naverLogin = catchAsync(async (req, res) => {
    const naverToken = req.headers.authorization;

    if (!naverToken) detectError("NOT_ACCESS_TOKEN", 401);

    const naver_accessToken = await userService.naverLogin(naverToken);

    return res.status(200).json({ accessToken: naver_accessToken });
});

// 구글 로그인
const googleLogin = catchAsync(async (req, res) => {
    const googleToken = req.headers.authorization;

    if (!googleToken) detectError("NOT_ACCESS_TOKEN", 401);

    const google_accessToken = await userService.googleLogin(googleToken);

    return res.status(200).json({ accessToken: google_accessToken });
});


module.exports ={
    signUp,
    signIn,
    hasId,
    sendEmail,
    verifyCode,

    kakaoLogin,
    naverLogin,
    googleLogin
};