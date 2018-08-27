const express = require('express')
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)

const router = express.Router()

router.post('/stripe', (req, res) => {
  console.log(req.body)
  res.send('hi')
})

module.exports = router
