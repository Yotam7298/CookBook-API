const router = require('express').Router();
const {
  validateAddRecipe,
  validateRemoveRecipe,
} = require('../middleware/requestValidation');

const {
  getRecipes,
  addRecipe,
  removeRecipe,
} = require('../controllers/recipes');

router.get('/', getRecipes);
router.post('/', addRecipe);
router.delete('/:recipeId', removeRecipe);

module.exports = router;
