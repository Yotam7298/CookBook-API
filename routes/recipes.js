const router = require('express').Router();
const {
  validateRecipe,
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
router.post('/', validateRecipe, addRecipe);
router.patch('/:recipeId', validateRecipe, updateRecipe);
router.delete('/:recipeId', validateRemoveRecipe, removeRecipe);

module.exports = router;
