const getQA = "SELECT * FROM product_question WHERE product_id = $1";

const getSpecificAnswers = "SELECT * FROM product_answer WHERE question_id = $1";

const getAnswerPhotos = "SELECT * FROM answers_photo WHERE answer_id = $1";

const askQuestion ="INSERT INTO product_question (product_id, body, date_written, asker_name, asker_email, reported, helpful) VALUES ($1, $2, $3, $4, $5, $6, $7)";

/*
FIXME answerQuestion isn't working; take a look and fix
*/

// const answerQuestion = "WITH data(question_id, body, date_written, answerer_name, answerer_email) AS (VALUES(${question_id}, '${body}', NOW(), '${name}', '${email}')),ins AS(INSERT INTO answers (question_id, body, date_written, answerer_name, answerer_email) SELECT question_id, body, date_written, answerer_name, answerer_email FROM data RETURNING id AS answer_id) INSERT INTO answers_photos (answer_id, url) SELECT ins.answer_id, json_array_elements_text('{"urls":${photos}}'::JSON -> 'urls')FROM ins";

module.exports = {
  getQA,
  getSpecificAnswers,
  askQuestion,
  //answerQuestion,
};