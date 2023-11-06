"use strict";

const findService = require("../services/findService");
const {catchAsync, detectError} = require("../utils/detectError");


const idList =  catchAsync(async(req, res) => {
    const {name, email} = req.body;
    if(!name || !email) detectError("KEY_ERROR", 400);

    const result = (await findService.idList(name, email));
    return res.status(200).json(result);
});


const resetPassword = catchAsync(async(req, res) => {
    const {user_name, email, password} = req.body;
    if(!user_name || !email || !password) detectError("KEY_ERROR", 400);

    const result = await findService.resetPassword(user_name, email, password);

    return res.status(200).json(result);
});

module.exports ={
    idList,
    resetPassword
};