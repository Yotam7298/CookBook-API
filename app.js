// Libraries
const express = require('express');
const mongoose = require('mongoose');
// Config
const config = require('./config');
// Router
const indexRouter = require('./routes/index');

const app = express();

mongoose.connect(config.mongoUrl);
mongoose.set('strictQuery', false);

app.use('/', indexRouter);

app.listen(config.port, () => {
  // eslint-disable-next-line no-console
  console.log(
    `Server is running at port ${config.port}, Node Enviroment: build`
  );
});
