"use strict";

const mysql = require('mysql2');
require('dotenv').config();

const withdrawal = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME_WITHDRAWAL,
});

withdrawal.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
    return;
  }
});

module.exports = withdrawal;
