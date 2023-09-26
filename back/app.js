const express = require('express');
const dotenv = require('dotenv'); // dotenv
const member = require('./src/db/member');

const app = express();
dotenv.config();

member.query('SELECT * FROM user', (err, results) => {
  if (err) {
    console.error('Error executing query:', err);
    return;
  }
  console.log('Query results:', results);
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = app;