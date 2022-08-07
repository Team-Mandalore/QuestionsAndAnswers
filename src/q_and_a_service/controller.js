const pool = require ('../../db.js');
const queries = require ('./queries.js');
const models =  require ('./models.js');

/*
SECTION- //----------OLD WORKING QUERY CALLS -----------------------------------//These are olf query calls that I wrote before writing the models.js file and moving db intearction there.
*/

// const getQA = (req, res) => {
//   const product_id = parseInt(req.params.product_id);
//   pool.query(queries.getQA , [product_id], (error, results) => {
//     if (error) throw error;
//     res.status(200).json(results.rows);
//   })
// };


// const getSpecificAnswers = (req, res) => {
//   const question_id = parseInt(req.params.question_id);
//   pool.query(queries.getSpecificAnswers, [question_id], (error, results) => {
//     if (error) throw error;
//     res.status(200).json(results.rows);
//   })
// };
//-------------------- END OLD WORKING QUERY CALLS --------------------------------//


/*
SECTION I tried to combine the query calls, nesting one into the other.  This butchered the code.  The following section of code is the above query calls nested and butchered.  This also occured BEFORE I moved db interaction in a new models.js file.
*/

//await
// const getQA = async (req1, res1) => {
//   try {
//     const getQ = await (req2, res2) => {
//       const product_id = parseInt(req2.params.product_id);
//       pool.query(queries.getQA , [product_id], (error2, results2) => {
//         if (error2) {
//           throw error2;
//         } else if (res2.status === 200) {
//           return json(results2.rows)
//         }
//       })
//     };
//   } catch (err) {
//     throw err
//   }
//   const question_id = parseInt(req.params.question_id);
//  //const getQ = await the query; assign variable to result; wrap in try/catch

//   pool.query(queries.getSpecificAnswers, [question_id], (error, results) => {
//     if (error) throw error;
//     res.status(200).json(results.rows);
//   })
// };
//--------------------- END OF BUTCHERED QUERy CALLS --------------------------------//


const getSpecificAnswers = async (req, res) => {
  try {
    const { question_id } = req.params;
    const specificAnswers = await models.getSpecificAnswers(question_id);
    //console.log('specificAnswers: ', specificAnswers); returns an array of objects
    const answers = {}
    for (let i = 0; i < specificAnswers.length; i++) {
      answers[specificAnswers[i]["id"]] = specificAnswers[i];
    }
    res.send(answers);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
};


    // pool.query(queries.getSpecificAnswers, [question_id], (error, results) => {
    //   if (error) throw error;
    //   res.status(200).json(results.rows);
    // })



/*
TODO Use forEach to match answers to question IDs; Depends on model.js Todo
*/
const getQA = async (req, res) => {
  try {
    const { product_id } = req.params;
    const questions = await models.getAllQuestions(req.params.product_id);
    const data = {
      product_id,
      results: questions,
    };
    res.send(data);
  } catch (err) {
    console.log(err);
    res.send(500);
  }
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