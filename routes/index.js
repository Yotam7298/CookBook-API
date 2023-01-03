const router = require('express').Router();
const usersRouter = require('./users');
const recipesRouter = require('./recipes');
const { signUp, signIn } = require('../controllers/users');

router.use('/users', usersRouter);
router.use('/recipes', recipesRouter);
router.post('/signup', signUp);
router.post('/signin', signIn);

module.exports = router;
