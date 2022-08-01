const pool = require ('../../db.js');
const queries = require ('./queries.js');


const getQA = (req, res) => {
  pool.query(queries.getQA , (error, results) => {
    if (error) throw error;
    res.status(200).json(results.rows);
  })
};

module.exports = {
  getQA,
};