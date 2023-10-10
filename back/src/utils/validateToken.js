"use strict";

const jsonwebtoken = require("jsonwebtoken");

const validateToken = async (req, res, next) => {
    try{
        const jwt = req.headers.authorization;
        const decode = jsonwebtoken.decode(jwt, process.env.JWT_SECRET);

        req.user_no = decode.user_no;
        next();
    } catch(err){
        await res.status(401).json({message: "INVELID_ACCESS_TOKEN"})
        next(err);
    }
};

module.exports = {
    validateToken
};