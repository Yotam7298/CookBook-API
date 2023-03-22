const router = require('express').Router();
const usersRouter = require('./users');
const recipesRouter = require('./recipes');
const { signUp, signIn } = require('../controllers/users');
const auth = require('../middleware/auth');
const {
  validateSignUp,
  validateSignIn,
} = require('../middleware/requestValidation');

router.use('/users', auth, usersRouter);
router.use('/recipes', auth, recipesRouter);
router.post('/signup', validateSignUp, signUp);
router.post('/signin', validateSignIn, signIn);
router.get('/', (req, res) => {
  res.send({ message: 'Express API is running' });
});

module.exports = router;
