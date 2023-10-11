"use strict";

const nodemailer = require('nodemailer');

const sendEmail = async (to, code) => {
    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.SMTP_EMAIL, // 실제 Gmail 계정의 이메일 주소
            pass: process.env.SMTP_PASSWORD, // Gmail 계정의 암호
        }
    });

    const mailOptions = {
        from: process.env.SMTP_EMAIL,
        to,
        subject: "Archipe Email 인증코드입니다.",
        html: `
            <h1>Archiple 인증코드입니다.</h1>
            <p><strong>${code}</strong></p>
            `
    };

    try {
        const info = await transporter.sendMail(mailOptions);
        //console.log('Email sent:', info.response);
        return true; // 이메일 전송 성공
    } catch (error) {
        //console.error('Error sending email:', error);
        return false; // 이메일 전송 실패
    }
};

module.exports = sendEmail;
