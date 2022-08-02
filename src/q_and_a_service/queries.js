const getQA = "SELECT * FROM product_question WHERE product_id = $1";
const getSpecificAnswers = "SELECT * FROM product_answer WHERE question_id = $1";
const askQuestion ="INSERT INTO product_question (product_id, body, date_written, asker_name, asker_email, reported, helpful) VALUES ($1, $2, $3, $4, $5, $6, $7)";

module.exports = {
  getQA,
  getSpecificAnswers,
  askQuestion,
};