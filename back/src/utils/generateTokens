const member = require("../models/member");
const jwt = require("jsonwebtoken");

const generateTokens = async (user_no) => {
  try {
    const payLoad = { user_no };

    const accessToken = jwt.sign(payLoad, process.env.JWT_SECRET, {
      expiresIn: "15m"
    });

    const refreshToken = jwt.sign(payLoad, process.env.REFRESH_JWT_SECRET, {
      expiresIn: "2week"
    });

    await member.deleteRefreshToken(user_no);
    await member.registerRefreshToken(user_no, refreshToken);

    return { accessToken, refreshToken, success: true };
  } catch (error) {
    return { success: false, message: error.message };
  }
};

module.exports = generateTokens;
