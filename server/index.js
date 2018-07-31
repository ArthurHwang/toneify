require('dotenv/config')
const express = require('express')
const bodyParser = require('body-parser')
const { MongoClient } = require('mongodb')
const path = require('path')

const app = express()

const port = process.env.PORT || 3000

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, 'public')))

MongoClient.connect(
  process.env.MONGODB_URI,
  { useNewUrlParser: true }
).then(client => {
  const db = client.db('toneify')
  const pedalboards = db.collection('pedalboards')
  const pedals = db.collection('pedals')

  app.get('/api/pedalboards', (req, res) =>
    pedalboards
      .find()
      .toArray()
      .then(data => {
        res.json(data)
      })
      .catch(err => {
        console.log(err)
        res.sendStatus(500)
      })
  )

  app.get('/api/pedals', (req, res) =>
    pedals
      .find()
      .toArray()
      .then(data => {
        res.json(data)
      })
      .catch(err => {
        console.log(err)
        res.sendStatus(500)
      })
  )

  app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/index.html'), err => {
      if (err) {
        res.status(500).send(err)
      }
    })
  })

  app.listen(port, () => console.log(`Listening on port ${port}`))
})
