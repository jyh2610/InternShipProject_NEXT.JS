const express = require('express');
const dotenv = require('dotenv');
const all_db = require('./src/db/all');

const app = express();
dotenv.config();

all_db.member.query('SELECT * FROM user', (err, results) => {
  if (err) {
    console.error('Error executing query:', err);
    return;
  }
  console.log('Query results:', results);
});

module.exports = app;