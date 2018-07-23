require('dotenv/config')
const express = require('express')
const bodyParser = require('body-parser')
const { MongoClient} = require('mongodb')
const app = express()

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/public', express.static(__dirname + '/public'));


MongoClient
  .connect(process.env.MONGODB_URI, {useNewUrlParser: true})
  .then(client => {
    const db = client.db('toneify')
    const collection = db.collection('pedalboards')

    app.get('/pedalboards', (req, res) => {
      return collection
      .find()
      .toArray()
      .then(data => {
        res.json(data)
      })
      .catch(err => {
        console.log(err);
        res.sendStatus(500)
      })
    })

    app.listen(3000, () => console.log('Listening on port 3000'))
  })
