const pool = require ('../../db.js');
const queries = require ('./queries.js');
const models =  require ('./models.js');

/*
NOTE getSpecificAnswers controller shouldn't be tied to an endpoint on its own.  It's written to be called inside the /qa/product_id controller.
*/

const getSpecificAnswers = async (question_id) => {
  try {
    const specificAnswers = await models.getSpecificAnswers(question_id);
    const answers = {}
    for (let i = 0; i < specificAnswers.length; i++) {
      const currentAnswerId = specificAnswers[i]["id"];
      const answerPhotos = await models.getAnswerPhotos(currentAnswerId);
      answers[specificAnswers[i]["id"]] = specificAnswers[i];
      answers[currentAnswerId]["photos"] = answerPhotos["url"];
    }
    //console.log(answers);
    return answers;
  } catch (err) {
    //console.log(err);
    return err;
  }
};



const getQA = async (req, res) => {
  const { product_id } = req.params;
  const questions = await models.getAllQuestions(req.params.product_id);
  const updatedQuestionsArray = questions.map(question => {
    return {
      "question_id": question.id,
      "question_body": question.body,
      "question_date": new Date(question.date_written),
      "asker_name": question.asker_name,
      "question_helpfulness": question.helpful,
      "reported": question.reported,
    }
  })
    //Works. Logs array of question objects. console.log('questions: ', questions);

  Promise.all(updatedQuestionsArray.map(question => {
    const question_id = question["id"];
    return getSpecificAnswers(question_id);
  }))
  .then ((currentAnswersArray) => {
    //works. logs array of answer objects.
    // console.log('currentAnswersArray: ', currentAnswersArray);
    currentAnswersArray.map((answerObject => {
      // works. For each question id, this map logs an object with every answer objects of the associated question id nested within console.log('answerObject: ', answerObject);
      loop1:
      for (let i = 0; i < updatedQuestionsArray.length; i++) {
        //console.log('questions: ', questions)
        if (questions[i].answers !== undefined) {
          break;
        }
        loop2:
        for (let j = 0; j < currentAnswersArray.length; j++) {

          //console.log('currentAnswersArray: ', currentAnswersArray)

          loop3:
          for (var key in currentAnswersArray[j]) {
            //works. Key is logging the answer number for each answer object console.log('key: ', key)
            if (Number(questions[i].id) === Number(currentAnswersArray[j][key]['question_id'])) {
              questions[i].answers = answerObject;
              // console.log('questions object after loops: ', questions)
              break loop2;
            }
          }
        }
      }
    }))
    return updatedQuestionsArray;
  })
  // .then ((updatedQuestions) => {
  //   console.log('updatedQuestions: ', updatedQuestions);
  //   questionsAndAnswers = (updatedQuestions)
  //   return questionsAndAnswers
  // })
  .then((questionsWithAnswers) => {
    //console.log(response)
    const data = {
      product_id,
      results: questionsWithAnswers,
    };
    //console.log('data: ', data);
    res.set('Connection', 'close');
    res.send(data);
  })
  .catch ((err) => {
    console.log(err);
    res.send(500);
  })
}


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
  const { body, answerer_name, answerer_email, url } = req.body;
  const question_id =  req.params.question_id;
  const date_written = 1595884714409;
  const reported = false;
  const helpful = 0;
  pool.query(queries.answerQuestion, [question_id, body, date_written, answerer_name, answerer_email, reported, helpful, url], (error, results) => {
    if (error) throw error;
    res.status(201).send('Answer posted successfully!');
    console.log('Answer posted successfully!');
  })
}



module.exports = {
  getQA,
  getSpecificAnswers,
  askQuestion,
  answerQuestion,
};