const express = require('express')

const router = express.Router()

router.post('/stripe', (req, res) => {
  console.log(req.body)
  res.send('hi')
})

module.exports = router
