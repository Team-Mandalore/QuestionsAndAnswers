const { Router } = require ('express');
const controller = require ('./controller.js');
const router = Router();

/*
NOTE get request to /qa/:question_id/answers endpoint should only return all answers and associated photo URLs in the db associated with the indicated question id
*/
router.get ('/:question_id/answers', controller.getSpecificAnswers);



/*
NOTE get request to /qa/:product_id endpoint should return all questions in db for the indicated product AND each question's set of answers INCLUDING lists of photo URLs associated with each answer
*/
router.get ('/:product_id', controller.getQA);






router.post ('/:product_id', controller.askQuestion);
router.post ('/:question_id/answers', controller.answerQuestion)


module.exports = router;