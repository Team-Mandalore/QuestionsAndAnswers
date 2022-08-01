const pool = require ('../../db.js');
const queries = require ('./queries.js');

const getQA = (req, res) => {
  console.log('queries.qa', queries.getQA);
  const product_id = parseInt(req.params.product_id);
  pool.query(queries.getQA , [product_id], (error, results) => {
    if (error) throw error;
    res.status(200).json(results.rows);
  })
};

const getSpecificAnswers = (req, res) => {
  const question_id = parseInt(req.params.question_id);
  pool.query(queries.getSpecificAnswers, [question_id], (error, results) => {
    if (error) throw error;
    res.status(200).json(results.rows);
  })
};

module.exports = {
  getQA,
  getSpecificAnswers,
};