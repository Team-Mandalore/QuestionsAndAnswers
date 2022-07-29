--Create product_answer table
DROP TABLE IF EXISTS product_answer;

CREATE TABLE product_answer (
  id SERIAL PRIMARY KEY,
  question_id INT,
  body VARCHAR(255) NOT NULL,
  date_written BIGINT NOT NULL,
  answerer_name VARCHAR(50) NOT NULL,
  answerer_email VARCHAR(255) NOT NULL,
  reported BOOLEAN NOT NULL,
  helpful INTEGER NOT NULL,
  CONSTRAINT fk_questionid
    FOREIGN KEY(question_id)
      REFERENCES product_question(id)
        ON DELETE CASCADE
);

--copy  product_answer  FROM '/users/monicacupp/desktop/SDCapstone/answers.csv' DELIMITER ',' CSV HEADER;