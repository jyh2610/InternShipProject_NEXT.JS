"use strict";

const mysql = require('mysql2');
require('dotenv').config();

const auth = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME_AUTH,
});

auth.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
    return;
  }
});

module.exports = auth;
