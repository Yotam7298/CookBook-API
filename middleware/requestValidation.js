const { celebrate, Joi } = require('celebrate');
Joi.objectId = require('joi-objectid')(Joi);
const validator = require('validator');

const validateURL = (value, helpers) => {
  if (validator.isURL(value)) {
    return value;
  }
  return helpers.error('string.uri');
};

module.exports.validateSignUp = celebrate({
  body: Joi.object().keys({
    email: Joi.string().required().email(),
    password: Joi.string().required().min(8),
    name: Joi.string().required().min(2).max(30),
  }),
});

module.exports.validateSignIn = celebrate({
  body: Joi.object().keys({
    email: Joi.string().required().email(),
    password: Joi.string().required().min(8),
  }),
});

module.exports.validateAddRecipe = celebrate({
  body: Joi.object().keys({
    title: Joi.string().required(),
    recipeId: Joi.number().integer(),
    image: Joi.string().custom(validateURL),
    time: Joi.number().integer().required(),
    source: Joi.string().required(),
    dairyFree: Joi.bool(),
    glutenFree: Joi.bool(),
    vegan: Joi.bool(),
    vegetarian: Joi.bool(),
    ingredients: Joi.array().items(Joi.object()),
    instructions: Joi.array().items(Joi.string()),
    owner: Joi.objectId(),
  }),
});

module.exports.validateRemoveRecipe = celebrate({
  params: Joi.object().keys({
    recipeId: Joi.objectId(),
  }),
});
