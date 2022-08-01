const getQA = "SELECT * FROM product_question WHERE product_id = $1";
const getSpecificAnswers = "SELECT * FROM product_answer WHERE question_id = $1"

module.exports = {
  getQA,
  getSpecificAnswers,
};