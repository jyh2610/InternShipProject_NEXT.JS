"use strict";

const auth = require("../models/auth");
const member = require("../models/member");

//local SignUp
const localSignUp = async (user) => {};

//local SignIn
const localSignIn = async (user) => {};


// const signIn = async (email, password) => {
//   const hashedPassword = await userDao.getHashedPassword(email);
//   if (!hashedPassword) detectError("PASSWORD_DOES_NOT_MATCH", 400);

//   const compare = await bcrypt.compare(password, hashedPassword);
//   if (!compare) detectError("PASSWORD_DOES_NOT_MATCH", 400);

//   const [userData] = await userDao.getUserId(email);

//   const payLoad = { userId: userData.id };

//   const jwtToken = jwt.sign(payLoad, process.env.JWT_SECRET);

//   return jwtToken;
// };

module.exports = {
  localSignUp,
  localSignIn,
};
