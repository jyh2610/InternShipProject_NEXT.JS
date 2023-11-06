"use strict";

const nodemailer = require("nodemailer");
const fs = require("fs");

const htmlContent = fs.readFileSync(__dirname + "/emailVerifyForm.html", "utf8");

const sendEmail = async (to, code) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.SMTP_EMAIL, // 실제 Gmail 계정의 이메일 주소
      pass: process.env.SMTP_PASSWORD, // Gmail 계정의 암호
    },
  });

  const mailOptions = {
    from: process.env.SMTP_EMAIL,
    to,
    subject: "Archipe Email 인증코드입니다.",
    html: htmlContent.replace("${code}", code),
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    return { message: "Mail sent!", success: true }; // 이메일 전송 성공
  } catch (error) {
    return { message: "Failed to send mail", success: false }; // 이메일 전송 실패
  }
};

module.exports = sendEmail;
