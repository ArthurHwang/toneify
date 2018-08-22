const express = require('express')

const router = express.Router()
require('dotenv/config')
const uuid = require('uuid')
const { MongoClient } = require('mongodb')
const path = require('path')
const moment = require('moment')

router.get('/test', (req, res) => {
  res.json({ msg: 'Users Works ' })
})

router.put('/api/userConfigs/:id', (req, res) => {
  const id = req.params.id
  const date = moment().format('DD/MM/YYYY h:mm:ss a')
  const pedalBoard = req.body.pedalBoard
  const pedals = req.body.pedals
  userConfigs
    .findOneAndUpdate({ id }, { $set: { timeStamp: date, pedalBoard, pedals } }, { returnOriginal: false })
    .then(result => res.json(result.value))
    .catch(err => {
      console.log(err)
      res.sendStatus(500)
    })
})

router.get('/api/userConfigs/:id', (req, res) => {
  const id = req.params.id
  userConfigs
    .findOne({ id })
    .then(data => {
      res.json(data)
    })
    .catch(err => {
      console.log(err)
      res.sendStatus(500)
    })
})

router.get('/api/userConfigs', (req, res) =>
  userConfigs
    .find()
    .toArray()
    .then(data => {
      res.json(data)
    })
    .catch(err => {
      console.log(err)
      res.sendStatus(500)
    }))

router.post('/api/userConfigs', (req, res) => {
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

router.delete('/api/userConfigs/:id', (req, res) => {
  const id = req.params.id
  userConfigs
    .findOneAndDelete({ id })
    .then(response => {
      res.json(response)
    })
    .catch(err => {
      console.log(err)
      res.sendStatus(500)
    })
})
