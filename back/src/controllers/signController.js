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

const hasId = catchAsync(async(req, res) => {
    const {user_name} = req.body;
    if (!user_name) detectError("KEY_ERROR", 400);

    return res.status(200).json(await signService.isDuplicateUsername(user_name));
});

const hasNickname = catchAsync(async(req, res) => {
    const {nickname} = req.body;
    if (!nickname) detectError("KEY_ERROR", 400);

    return res.status(200).json(await signService.isDuplicateNickname(nickname));
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
    return res.status(200).json({sucess: true, sumessage: "SIGN_OUT_COMPLETED"});
});


// headerTest
const headerTest = catchAsync(async (req, res) => {
    const result = req.headers.authorization.split(' ')[1];
    return res.status(200).json({ accessToken: result, message:"예 다시 돌려드렸습니다~" });
});


module.exports ={
    signUp,
    signIn,
    hasId,
    hasNickname,

    sendEmail,
    verifyCode,

    kakaoLogin,
    naverLogin,
    googleLogin,

    signOut,

    headerTest
};