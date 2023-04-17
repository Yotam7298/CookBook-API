const router = require('express').Router();
const { validateFeedback } = require('../middleware/requestValidation');
const { postFeedback, getAllFeedbacks } = require('../controllers/feedback');

router.post('/', validateFeedback, postFeedback);
router.get('/', getAllFeedbacks);

module.exports = router;
