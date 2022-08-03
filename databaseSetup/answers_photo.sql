
DROP TABLE IF EXISTS answers_photo;

CREATE TABLE answers_photo (
  id SERIAL PRIMARY KEY,
  answer_id INT,
  "url" VARCHAR(255) NOT NULL,
  CONSTRAINT fk_answerid
    FOREIGN KEY(answer_id)
      REFERENCES product_answer(id)
        ON DELETE CASCADE
);

\copy  answers_photo  FROM '/users/monicacupp/desktop/SDCapstone/answers_photos.csv' DELIMITER ',' CSV HEADER;