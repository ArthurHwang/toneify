const passport = require('passport')
const express = require('express')

const router = express.Router()

router.get(
  '/google',
  passport.authenticate('google', {
    scope: ['profile', 'email']
  })
)

router.get('/google/callback', passport.authenticate('google'), (req, res) => {
  res.redirect('/pedalboards')
})

router.get('/api/current_user', (req, res) => {
  res.send(req.user)
})

router.get('/api/logout', (req, res) => {
  req.logout()
  res.send(req.user)
})

router.get('/facebook', passport.authenticate('facebook'))

router.get('/facebook/callback', passport.authenticate('facebook'), (req, res) => {
  res.redirect('/pedalboards')
})

module.exports = router
