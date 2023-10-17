const jsonwebtoken = require("jsonwebtoken");
const member = require("../models/member");

const validateToken = async (req, res, next) => {
    try {
        const decode = jsonwebtoken.verify(req.headers.authorization.split(' ')[1], process.env.JWT_SECRET);
        const refreshToken = await member.getRefreshToken(decode.user_no);
        if (!refreshToken) {throw new Error();}
        req.user_no = decode.user_no; //request.user_no에 user_no를 담아 다음 모듈로 넘겨줌
        next();
    } catch(err){
        await res.status(401).json({message: "INVALID_ACCESS_TOKEN"})
        next(err);
    }
};

const reissuanceToken = async (req, res) => {
    try{
        const refreshTokenToGetClient = req.headers.authorization.split(' ')[1]
        const decode = jsonwebtoken.verify(refreshTokenToGetClient, process.env.REFRESH_JWT_SECRET);
        //db에 decode.user_no 조회
        if(refreshTokenToGetClient === (await member.getRefreshToken(decode.user_no)).refresh_token){ // 기존의 DB의 값과 같은지 확인
            const Token = jsonwebtoken.sign(decode.user_no, process.env.JWT_SECRET, {
                expiresIn: "15m"
            });
            return {accessToken: Token, success: true, message: "NEW_ACCESS_TOKEN_ISSUED"};
        }
    } catch(err){
        await res.status(401).json({success: false, message: "INVALID_REFRESH_TOKEN"});
    }
};

module.exports = {
    validateToken,
    reissuanceToken
};