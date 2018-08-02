require('dotenv/config')
const uuid = require('uuid')
const express = require('express')
const bodyParser = require('body-parser')
const { MongoClient } = require('mongodb')
const path = require('path')
const moment = require('moment')

const app = express()
const port = process.env.PORT || 3000

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, 'public')))

MongoClient.connect(
  process.env.MONGODB_URI,
  { useNewUrlParser: true }
).then(client => {
  const db = client.db('')
  const pedalboards = db.collection('pedalboards')
  const pedals = db.collection('pedals')
  const userConfigs = db.collection('userConfigs')

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

  app.get('/api/userConfigs/:id', (req, res) => {
    const id = req.params.id
    userConfigs
      .findOne({ id: id })
      .then(data => {
        res.json(data)
      })
      .catch(err => {
        console.log(err)
        res.sendStatus(500)
      })
  })

  app.get('/api/userConfigs', (req, res) =>
    userConfigs
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

  app.post('/api/userConfigs', (req, res) => {
    const id = uuid()
    const pedalBoard = req.body.pedalBoard
    const pedals = req.body.pedals
    const date = moment().format('DD/MM/YYYY h:mm:ss a')
    userConfigs
      .insertOne({ id, timeStamp: date, pedalBoard, pedals })
      .then(result => res.json(result.ops[0]))
      .catch(err => {
        console.log(err)
        res.sendStatus(500)
      })
  })

  app.delete('/api/userConfigs/:id', (req, res) => {
    const id = req.params.id
    userConfigs
      .findOneAndDelete({ id: id })
      .then(response => {
        res.json(response)
      })
      .catch(err => {
        console.log(err)
        res.sendStatus(500)
      })
  })

  app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/index.html'), err => {
      if (err) {
        res.status(500).send(err)
      }
    })
  })

  app.listen(port, () => console.log(`Listening on port ${port}`))
})
