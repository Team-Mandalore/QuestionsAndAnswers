const pool = require ('../../db.js');
const queries = require ('./queries.js');


const getAllQuestions = async (product_id) => {
  const { rows } = await pool.query(queries.getQA, [product_id]);
  return rows;
};

const getSpecificAnswers = async (question_id) => {
  const { rows } = await pool.query(queries.getSpecificAnswers, [question_id]);
  return rows;
}

const getAnswerPhotos = async (answer_id) => {
  const { rows } = await pool.query(queries.getAnswerPhotos, [answer_id]);
  return rows;
}


module.exports = {
  getAllQuestions,
  getSpecificAnswers,
  getAnswerPhotos,
}