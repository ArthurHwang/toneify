const { Router } = require('express')
const uuid = require('uuid')
const moment = require('moment')

module.exports = function userConfigsRouter(userConfigs) {
  const router = new Router()

  router.put('/:id', (req, res, next) => {
    const id = req.params.id
    const date = moment().format('MM/DD/YYYY h:mm:ss a')
    const pedalBoard = req.body.pedalBoard
    const pedals = req.body.pedals
    userConfigs
      .findOneAndUpdate({ id }, { $set: { timeStamp: date, pedalBoard, pedals } }, { returnOriginal: false })
      .then(result => res.json(result.value))
      .catch(err => {
        next(err)
      })
  })

  router.get('/:id', (req, res, next) => {
    const id = req.params.id
    userConfigs
      .findOne({ id })
      .then(data => {
        res.json(data)
      })
      .catch(err => {
        next(err)
      })
  })

  router.get('/', (req, res, next) =>
    userConfigs
      .find()
      .toArray()
      .then(data => {
        res.json(data)
      })
      .catch(err => {
        next(err)
      }))

  router.post('/', (req, res, next) => {
    const id = uuid()
    const pedalBoard = req.body.pedalBoard
    const pedals = req.body.pedals
    const date = moment().format('MM/DD/YYYY h:mm:ss a')
    userConfigs
      .insertOne({ id, timeStamp: date, pedalBoard, pedals })
      .then(result => res.json(result.ops[0]))
      .catch(err => {
        next(err)
      })
  })

  router.delete('/:id', (req, res, next) => {
    const id = req.params.id
    userConfigs
      .findOneAndDelete({ id })
      .then(response => {
        res.json(response)
      })
      .catch(err => {
        next(err)
      })
  })
  return router
}
