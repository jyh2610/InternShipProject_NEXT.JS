"use strict";

const express = require('express');
const routes = require('./src/routes'); // index.js 생략 가능
const cors = require('cors');
const morgan = require('morgan');

const app = express();

app.use(cors({
  origin: 'http://3.37.127.151:443'
}));
// 같은 ec2내에 잇는 프론트엔드 서버에서 오는 요청만 허용
app.use(express.json());
app.use(routes);
app.use(morgan('dev'));

app.get("/ping", (req, res) => {
  res.json({message: "pong"});
});

module.exports = app;