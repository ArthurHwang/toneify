require('dotenv/config');
const { MongoClient } = require('mongodb');
const seeddData = require('./seed');

MongoClient.connect(
  process.env.MONGODB_URI,
  (useNewUrlParse: true)
);
