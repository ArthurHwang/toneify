const express = require('express')
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)
const uuid = require('uuid')
const moment = require('moment')

const router = express.Router()

router.post('/stripe', async (req, res) => {
  if (!req.user) {
    return res.status(401).send({ error: 'You must log in' })
  }
  const charge = await stripe.charges.create({
    amount: req.body.amount,
    currency: 'usd',
    description: 'custom pedalboard configuration charge',
    source: req.body.token.id
  })

  const id = uuid()
  const date = moment().format('MM/DD/YYYY h:mm:ss a')

  req.user.purchaseHistory.push({
    id,
    timeStamp: date,
    pedalboard: req.body.pedalboard,
    pedals: req.body.pedals,
    amount: req.body.amount
  })
  const user = await req.user.save()

  res.send(user)
})

module.exports = router
