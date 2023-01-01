// Libraries
const express = require('express');
const mongoose = require('mongoose');
// Config
const config = require('./config');

const app = express();

mongoose.connect(config.mongoUrl);
mongoose.set('strictQuery', false);

app.listen(config.port, () => {
  // eslint-disable-next-line no-console
  console.log(
    `Server is running at port ${config.port}, Node Enviroment: build`
  );
});
