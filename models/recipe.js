const mongoose = require('mongoose');
const validator = require('validator');

const recipeSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  recipeId: {
    type: Number,
    required: true,
  },
  image: {
    type: String,
    required: true,
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
  dairyFree: {
    type: Boolean,
    required: true,
  },
  glutenFree: {
    type: Boolean,
    required: true,
  },
  vegan: {
    type: Boolean,
    required: true,
  },
  vegetarian: {
    type: Boolean,
    required: true,
  },
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
