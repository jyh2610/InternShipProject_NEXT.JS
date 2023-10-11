// "use strict";

// const jsonwebtoken = require("jsonwebtoken");

// const validateToken = async (req, res, next) => {
//     try{
//         const jwt = req.headers.authorization;
//         console.log(jwt);
//         const decode = jsonwebtoken.verify(jwt, process.env.JWT_SECRET);
//         req.user_no = decode.user_no;
//         next();
//     } catch(err){
//         await res.status(401).json({message: "INVELID_ACCESS_TOKEN"})
//         next(err);
//     }
// };

// module.exports = {
//     validateToken
// };

const jsonwebtoken = require("jsonwebtoken");

const validateToken = async (req, res, next) => {
    try{
        console.log(req.headers.authorization);
        const decode = jsonwebtoken.verify(req.headers.authorization.split(' ')[1], process.env.JWT_SECRET);
        console.log(decode);
        req.user_no = decode.user_no;
        next();
    } catch(err){
        await res.status(401).json({message: "INVALID_ACCESS_TOKEN"})
        next(err);
    }
};

module.exports = {
    validateToken
};