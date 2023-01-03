const Recipe = require('../models/recipe');
const { NotFoundError, UnauthorizedError } = require('../errors/errors');
const {
  articleNotFound,
  notAuthorized,
  recipeRemoved,
} = require('../messages');

module.exports.getRecipes = (req, res, next) => {
  const owner = req.user._id;

  Recipe.find({ owner })
    .then((recipes) => res.send(recipes))
    .catch(next);
};

module.exports.addRecipe = (req, res, next) => {
  const {
    title,
    recipeId,
    image,
    time,
    source,
    dairyFree,
    glutenFree,
    vegan,
    vegetarian,
    ingredients,
    instructions,
  } = req.body;
  const owner = req.user._id;

  Recipe.create({
    title,
    recipeId,
    image,
    time,
    source,
    dairyFree,
    glutenFree,
    vegan,
    vegetarian,
    ingredients,
    instructions,
    owner,
  })
    .then((recipe) => res.status(201).send(recipe))
    .catch(next);
};

module.exports.removeRecipe = (req, res, next) => {
  Recipe.findById(req.params.recipeId)
    .select('+owner')
    .then((recipe) => {
      if (!recipe) {
        return Promise.reject(new NotFoundError(articleNotFound));
      }
      if (recipe.owner.toString() !== req.user._id) {
        return Promise.reject(new UnauthorizedError(notAuthorized));
      }
      Article.findByIdAndRemove(req.params.recipeId)
        .then(() => res.send({ message: recipeRemoved }))
        .catch(next);
    })
    .catch(next);
};
