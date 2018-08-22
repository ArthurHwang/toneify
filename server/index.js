require('dotenv/config')
require('./services/passport')
const express = require('express')
const mongoose = require('mongoose')
const { MongoClient } = require('mongodb')
const bodyParser = require('body-parser')
const path = require('path')
const morgan = require('morgan')

const authRouter = require('./routes/authRoutes')
const userConfigsRouter = require('./routes/userConfigs')
const pedalboardsRouter = require('./routes/pedalboards')
const pedalsRouter = require('./routes/pedals')

mongoose.connect(process.env.MONGODB_URI)
const app = express()
const PORT = process.env.PORT || 3000

MongoClient.connect(
  process.env.MONGODB_URI,
  { useNewUrlParser: true }
)
  .catch(err => {
    console.error(err)
    process.exit(1)
  })
  .then(client => {
    const db = client.db()
    const pedalboards = db.collection('pedalboards')
    const pedals = db.collection('pedals')
    const userConfigs = db.collection('userConfigs')
    const publicPath = path.join(__dirname, 'public')

    app.use(morgan('combined'))
    app.use(bodyParser.json())
    app.use(bodyParser.urlencoded({ extended: true }))
    app.use(express.static(publicPath))

    app.use('/auth', authRouter)
    app.use('/api/pedalboards', pedalboardsRouter(pedalboards))
    app.use('/api/pedals', pedalsRouter(pedals))
    app.use('/api/userConfigs', userConfigsRouter(userConfigs))

    app.get('/*', (req, res) => {
      res.sendFile(path.join(__dirname, 'public/index.html'), err => {
        if (err) {
          res.status(500).send(err)
        }
      })
    })

    app.listen(PORT, () => console.log(`Listening on port ${PORT}`))
  })
