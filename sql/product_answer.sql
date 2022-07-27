--Create product_answer table
DROP TABLE IF EXISTS product_answer;

CREATE TABLE product_answer (
  id SERIAL PRIMARY KEY,
  question_id VARCHAR NOT NULL,
  body VARCHAR(255) NOT NULL,
  date_written timestamp(0) with time zone NOT NULL DEFAULT NOW(),
  answerer_name VARCHAR(50) NOT NULL,
  answerer_email VARCHAR(255) NOT NULL,
  reported BOOLEAN NOT NULL,
  helpful INTEGER NOT NULL
);