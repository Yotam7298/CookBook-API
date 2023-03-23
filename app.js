// Libraries
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const helmet = require('helmet');
const cors = require('cors');
const bodyParser = require('body-parser');
const { errors } = require('celebrate');
// Config
const config = require('./config');
// Router
const indexRouter = require('./routes/index');
// Middleware
const rateLimiter = require('./middleware/rateLimiter');
const pathNonExistent = require('./middleware/pathNonExistent');
const { requestLogger, errorLogger } = require('./middleware/logger');
const errorHandler = require('./middleware/errorHandler');

dotenv.config();

const app = express();
const {
  PORT = config.port,
  NODE_ENV = config.enviroment,
  MONGODB_URI = config.mongodbUri,
} = process.env;

mongoose.connect(MONGO_URL);
mongoose.set('strictQuery', false);

app.use(express.static('public'));
app.use(helmet());
app.use(rateLimiter);
app.use(cors());
app.options('*', cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(requestLogger);
app.use('/', indexRouter);
app.use('*', pathNonExistent);
app.use(errorLogger);
app.use(errors());
app.use(errorHandler);

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(
    `Server is running at port ${PORT}, Node Enviroment: ${NODE_ENV}`
  );
});
