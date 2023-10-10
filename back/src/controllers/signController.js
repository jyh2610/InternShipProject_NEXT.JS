"use strict";

const userService = require("../services/userService");
const {catchAsync, detectError} = require("../utils/detectError");

// local signUP
const signUp =  catchAsync(async(req, res) => {
    const {nickname, user_name, email, password, birthday, nation, sex} = req.body;
});