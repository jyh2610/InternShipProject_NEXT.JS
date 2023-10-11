"use strict";

const signService = require("../services/signService");
const {catchAsync, detectError} = require("../utils/detectError");


// local signUP
const signUp =  catchAsync(async(req, res) => {
    const {nickname, user_name, email, password, birthday, nation, sex} = req.body;
    if(!user_name || !email || !password) detectError("KEY_ERROR", 400);

    signService.localSignUp(nickname, user_name, email, password, birthday, nation, sex);

    return res.status(201).json({message: "USER_CREATED", success: true});
});

// local signIn
const signIn = catchAsync(async(req, res) => {
    const {user_name, password} = req.body;

    if (!user_name || !password) detectError("KEY_ERROR", 400);

    const token = await signService.localSignIn(user_name, password);

    return res.status(200).json({accessToken: token, success: true});
});

const hasId = catchAsync(async(req, res) => {
    const {user_name} = req.body;
    if (!user_name) detectError("KEY_ERROR", 400);

    return res.status(200).json(await signService.isDuplicateUsername(user_name));
});

const sendEmail = catchAsync(async(req, res) => {
    return res.status(200).json(await emailValidation(req.body.email));
});


module.exports ={
    signUp,
    signIn,
    hasId,
    sendEmail
};