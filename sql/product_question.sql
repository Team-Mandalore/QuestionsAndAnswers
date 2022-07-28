--Create product_question table
DROP TABLE IF EXISTS product_question;

CREATE TABLE product_question (
  id SERIAL PRIMARY KEY,
  product_id VARCHAR(50) NOT NULL DEFAULT NULL,
  body VARCHAR(255),
  date_written BIGINT NOT NULL,
  asker_name VARCHAR(50) NOT NULL,
  asker_email VARCHAR(255) NOT NULL,
  reported BOOLEAN NOT NULL,
  helpful INTEGER NOT NULL
);

--copy  product_question FROM '/users/monicacupp/desktop/SDCapstone/questions.csv' DELIMITER ',' CSV HEADER;