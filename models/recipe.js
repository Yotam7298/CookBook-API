const mongoose = require('mongoose');
const validator = require('validator');

const recipeSchema = mongoose.Schema({
  title: {
    type: String,
    minLength: 2,
    required: true,
  },
  recipeId: Number,
  image: {
    type: String,
    validate: {
      validator: (v) => validator.isURL(v),
      message: 'Please provide a URL',
    },
  },
  time: {
    type: Number,
    required: true,
  },
  source: {
    type: String,
    required: true,
  },
  dairyFree: Boolean,
  glutenFree: Boolean,
  vegan: Boolean,
  vegetarian: Boolean,
  ingredients: {
    type: [Object],
    required: true,
  },
  instructions: {
    type: [String],
    required: true,
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
    required: true,
    select: false,
  },
});

module.exports = mongoose.model('recipe', recipeSchema);
