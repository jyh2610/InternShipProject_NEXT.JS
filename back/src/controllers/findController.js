"use strict";

const findService = require("../services/findService");
const {catchAsync, detectError} = require("../utils/detectError");


const idList =  catchAsync(async(req, res) => {
    const {email} = req.body;
    if(!email) detectError("KEY_ERROR", 400);

    const result = (await findService.idList(email));
    return res.status(200).json(result);
});


const resetPassword = catchAsync(async(req, res) => {
    // const {user_name, password} = req.body;

    // if (!user_name || !password) detectError("KEY_ERROR", 400);

    // const result = await signService.localSignIn(user_name, password);

    // return res.status(200).json(result);
});

module.exports ={
    idList,
    resetPassword
};