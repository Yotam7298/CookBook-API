const port = 3001;
const enviroment = 'development';
const mongodbUri = 'mongodb://localhost:27017/cookbookdb';
const jwtKey = 'secret-key';

module.exports = {
  port,
  enviroment,
  mongodbUri,
  jwtKey,
};
