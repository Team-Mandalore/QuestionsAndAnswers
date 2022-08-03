const pool = require ('../../db.js');
const queries = require ('./queries.js');

const getQA = (req, res) => {
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

const askQuestion = (req, res) => {
  const { body, asker_name, asker_email } = req.body;
  const product_id = req.params.product_id;
  const date_written = 1595884714409;
  const reported = false;
  const helpful = 0;
  pool.query(queries.askQuestion, [product_id, body, date_written, asker_name, asker_email, reported, helpful], (error, results) => {
    if (error) throw error;
    res.status(201).send('Question posted successfully!');
    console.log('Question posted successfully!');
  })
};

const answerQuestion = (req, res) => {

}



module.exports = {
  getQA,
  getSpecificAnswers,
  askQuestion,
  answerQuestion,
};