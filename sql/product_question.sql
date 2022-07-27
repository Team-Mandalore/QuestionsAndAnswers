--Create product_question table
DROP TABLE IF EXISTS product_question;

CREATE TABLE product_question (
  id SERIAL PRIMARY KEY,
  product_id VARCHAR NOT NULL,
  body VARCHAR(255) NOT NULL,
  date_written timestamp(0) with time zone NOT NULL DEFAULT NOW(),
  asker_name VARCHAR(50) NOT NULL,
  asker_email VARCHAR(255) NOT NULL,
  reported BOOLEAN NOT NULL,
  helpful INTEGER NOT NULL
);