const Feedback = require('../models/feedback');

module.exports.postFeedback = (req, res, next) => {
  const { email, title, text } = req.body;

  Feedback.create({ email, title, text })
    .then(() => res.status(201).send('Feedback was sent'))
    .catch(next);
};

module.exports.getAllFeedbacks = (req, res, next) => {
  Feedback.find({})
    .then((feedbacks) => res.send(feedbacks))
    .catch(next);
};
