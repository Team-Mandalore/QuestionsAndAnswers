const Pool = require ('pg').Pool;
require('dotenv').config();

const { USER, HOST, DATABASE, PASSWORD } = process.env;


const pool = new Pool ({
  user: DB_USER,
  host: HOST,
  database: DATABASE,
  password: PASSWORD,
  port: 5432,
});

module.exports = pool;