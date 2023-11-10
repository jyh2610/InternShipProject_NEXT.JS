"use strict";

const findService = require("../services/findService");
const validateService = require("../services/validateService");
const {catchAsync, detectError} = require("../utils/detectError");


const idFind =  catchAsync(async(req, res) => {
    const {name, email} = req.body;
    if(!name || !email) detectError("KEY_ERROR", 400);

    const result = (await findService.idFind(name, email));
    return res.status(200).json(result);
});


const resetPassword = catchAsync(async(req, res) => {
    const {user_name, email, password} = req.body;
    if(!user_name || !email || !password) detectError("KEY_ERROR", 400);

    const result = await findService.resetPassword(user_name, email, password);

    return res.status(200).json(result);
});

const verifyCode = catchAsync(async(req, res, next) => {
    const {email, code} = req.body;
    if (!email || !code) detectError("KEY_ERROR", 400);
    
    const result = await validateService.verifyCode(email, code);

    if (!result.success) return res.status(200).json(result);

    next();
});



module.exports ={
    idFind,
    resetPassword,
    verifyCode
};