"use strict";

const express = require('express');
const routes = require('./src/routes'); // index.js 생략 가능
const cors = require('cors');
const morgan = require('morgan');
const dotenv = require('dotenv'); // dotenv 추가

dotenv.config(); // .env 파일을 로드

const app = express();

app.use(cors({
  origin: process.env.CORS_ORIGIN
}));
// 같은 ec2내에 있는 프론트엔드 서버에서 오는 요청만 허용
app.use(express.json());
app.use("/back", routes);
app.use(morgan('dev'));

app.get("/ping", (req, res) => {
  res.json({message: "pong"});
});

module.exports = app;
