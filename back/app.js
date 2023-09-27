"use strict";

const express = require('express');
const routes = require('./src/routes/index.js'); // index.js는 생략 가능
const cors = require('cors');
const morgan = require('morgan');
//push test
const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.use(morgan('dev'));

app.get("/ping", (req, res) => {
  res.json({message: "pong"});
});

module.exports = app;