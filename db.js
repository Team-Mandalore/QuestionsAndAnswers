const Pool = require ('pg').Pool;
require('dotenv').config();

const { USER, HOST, DATABASE, PASSWORD } = process.env;


const pool = new Pool ({
  user: USER,
  host: HOST,
  database: DATABASE,
  password: PASSWORD,
  port: 5432,
  max: 30,
});

module.exports = pool;