require('dotenv/config');
const { MongoClient } = require('mongodb');
const seeddData = require('./seed');

const MONGODB_URI = process.env.MONGODB_URI

MongoClient
  .connect(MONGODB_URI, {useNewUrlParse: true})
  .then(client => {
    const db = client.db('toneify')
    const collection = db.collection('pedalboards')

    // const remove = collection.remove()
    // const see = collection.insertMany(seedData)


    return collection.removeMany()
  })
