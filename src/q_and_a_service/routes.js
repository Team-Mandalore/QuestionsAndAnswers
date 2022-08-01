const { Router } = require ('express');
const controller = require ('./controller.js');

const router = Router();
console.log('Covid sucks');
router.get ('/:product_id', controller.getQA);
router.get('/:product_id/answers', controller.getSpecificAnswers);

module.exports = router;