const Pool = require ('pg').Pool;
const pool = new Pool ({
  user: "q_and_a_service",
  host: "localhost",
  database: "q_and_a_service",
  password: "#sdc#",
  port: 5432
});

module.exports = pool;