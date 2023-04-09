const router = require('express').Router();
const {
  validateAddRecipe,
  validateRemoveRecipe,
} = require('../middleware/requestValidation');

const {
  getSavedRecipes,
  getMyRecipes,
  addRecipe,
  updateRecipe,
  removeRecipe,
} = require('../controllers/recipes');

router.get('/saved', getSavedRecipes);
router.get('/my', getMyRecipes);
router.post('/', validateAddRecipe, addRecipe);
router.patch('/:recipeId', updateRecipe);
router.delete('/:recipeId', validateRemoveRecipe, removeRecipe);

module.exports = router;
