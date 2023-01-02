const mongoose = require('mongoose');
const validator = require('validator');

const recipeSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  recipeId: String,
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
  dairyFree: Boolean,
  glutenFree: Boolean,
  vegan: Boolean,
  vegetarian: Boolean,
  ingredients: [String],
  instructions: [String],
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
    required: true,
    select: false,
  },
});

module.exports = mongoose.model('recipe', recipeSchema);
