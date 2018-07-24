require('dotenv/config')
const { MongoClient } = require('mongodb')

const seedData = require('./seed')

const MONGODB_URI = process.env.MONGODB_URI

MongoClient.connect(
  MONGODB_URI,
  { useNewUrlParser: true }
)
  .then(client => {
    const db = client.db('toneify')
    const collection = db.collection('pedalboards')

    return collection
      .removeMany()
      .then(() => collection.insertMany(seedData))
      .then(() => client.close())
      .then(() => console.log('Database flushed and seeded!'))
  })
  .catch(err => {
    console.log(err)
    process.exit(1)
  })
