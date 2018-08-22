const { Router } = require('express')

module.exports = function pedalsRouter(pedals) {
  return new Router().get('/', (req, res, next) =>
    pedals
      .find()
      .toArray()
      .then(data => {
        res.json(data)
      })
      .catch(err => {
        next(err)
      }))
}
