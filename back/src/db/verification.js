"use strict";

const mysql = require('mysql2/promise');
require('dotenv').config();

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME_VERIFICATION,
  connectionLimit: process.env.DB_CONNECTION_LIMIT
});

const getConnection = async () =>{
  try{
    const conn = await pool.getConnection();
    return conn;
  } catch(err){
    console.error(`Connecion Error: ${err.message}`);
    return null;
  }
};

const releaseConnection = async (conn) =>{
  try{
    await conn.release();
  }catch(err){
    console.error(`Release Error: ${err.message}`);
  }
}

module.exports = {
  pool,
  getConnection,
  releaseConnection
};
