const { Router } = require('express')

module.exports = function pedalboardsRouter(pedalboards) {
  return new Router().get('/', (req, res, next) =>
    pedalboards
      .find()
      .toArray()
      .then(data => {
        res.json(data)
      })
      .catch(err => {
        next(err)
      }))
}
