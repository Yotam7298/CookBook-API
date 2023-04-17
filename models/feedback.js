const mongoose = require('mongoose');
const validator = require('validator');

const feedbackSchema = mongoose.Schema({
  email: {
    type: String,
    required: true,
    validate: {
      validator: (v) => validator.isEmail(v),
      message: 'Please provide an Email',
    },
  },
  title: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('feedback', feedbackSchema);
