"use strict";

const validateService = require("../services/validateService");
const {reissuanceToken} = require("../utils/token");
const {catchAsync, detectError} = require("../utils/detectError");

// id 중복 체크
const hasId = catchAsync(async(req, res) => {
    const {user_name} = req.body;
    if (!user_name) detectError("KEY_ERROR", 400);

    return res.status(200).json(await validateService.isDuplicateUsername(user_name));
});

// 닉네임 중복체크
const hasNickname = catchAsync(async(req, res) => {
    const {nickname} = req.body;
    if (!nickname) detectError("KEY_ERROR", 400);

    return res.status(200).json(await validateService.isDuplicateNickname(nickname));
});

//회원가입 완료한 유저의 이름, 가입시간
const signUpCheck = catchAsync(async(req, res) => {
    const {nickname} = req.body;
    if (!nickname) detectError("KEY_ERROR", 400);

    return res.status(200).json(await validateService.signUpCheck(nickname));
});

// 인증코드 이메일 전송
const sendEmail = catchAsync(async(req, res) => {
    return res.status(200).json(await validateService.emailValidation(req.body.email));
});

// 인증코드 검사
const verifyCode = catchAsync(async(req, res) => {
    const {email, code} = req.body;
    return res.status(200).json(await validateService.verifyCode(email, code));
});

// AccessToke 재발급
const reissuanceAeccessToken = catchAsync(async(req, res) => {
    const refreshToken = req.headers.authorization;

    if (!refreshToken) detectError("NOT_REFRESH_TOKEN", 401);
    
    const result = await reissuanceToken(refreshToken.split(' ')[1]);
    
    return res.status(201).json(result);
});

module.exports ={
    hasId,
    hasNickname,

    signUpCheck,

    sendEmail,
    verifyCode,

    reissuanceAeccessToken
};