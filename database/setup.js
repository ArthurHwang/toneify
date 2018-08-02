require('dotenv/config')
const { MongoClient } = require('mongodb');

const pedalBoards = require('./pedalboardsSeed')
const pedals = require('./pedalsSeed')

MongoClient.connect(
  process.env.MONGODB_URI,
  { useNewUrlParser: true }
)
  .then(client => {
    const db = client.db()
    const collection = db.collection('pedalboards')

    return collection
      .removeMany()
      .then(() => collection.insertMany(pedalBoards))
      .then(() => client.close())
      .then(() => console.log('***Database flushed and seeded PEDALBOARDS!***'))
  })
  .catch(err => {
    console.log(err)
    process.exit(1)
  })

MongoClient.connect(
  process.env.MONGODB_URI,
  { useNewUrlParser: true }
)
  .then(client => {
    const db = client.db()
    const collection = db.collection('pedals')

    return collection
      .removeMany()
      .then(() => collection.insertMany(pedals))
      .then(() => client.close())
      .then(() => console.log('***Database flushed and seeded PEDALS!***'))
  })
  .catch(err => {
    console.log(err)
    process.exit(1)
  })
