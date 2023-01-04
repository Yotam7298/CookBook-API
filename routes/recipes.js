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
router.post('/', validateAddRecipe, addRecipe);
router.delete('/:recipeId', validateRemoveRecipe, removeRecipe);

module.exports = router;
