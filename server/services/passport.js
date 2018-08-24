const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth20').Strategy
const FacebookStrategy = require('passport-facebook').Strategy
const mongoose = require('mongoose')

const User = mongoose.model('users')

passport.serializeUser((user, done) => {
  done(null, user.id)
})

passport.deserializeUser((id, done) => {
  User.findById(id).then(user => done(null, user))
})

passport.use(
  new FacebookStrategy(
    {
      clientID: process.env.FACEBOOK_APP_ID,
      clientSecret: process.env.FACEBOOK_SECRET,
      callbackURL: '/auth/facebook/callback',
      proxy: true
    },
    (accessToken, refreshToken, profile, done) => {
      User.findOne({ facebookId: profile.id }).then(existingUser => {
        if (existingUser) {
          console.log(existingUser)
          done(null, existingUser)
        } else {
          new User({ facebookId: profile.id }).save().then(user => done(null, user))
        }
      })
    }
  )
)

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: '/auth/google/callback',
      proxy: true
    },
    async (accessToken, refreshToken, profile, done) => {
      const existingUser = await User.findOne({ googleId: profile.id })
      if (existingUser) {
        return done(null, existingUser)
      }
      const user = await new User({ googleId: profile.id }).save()
      done(null, user)
    }
  )
)
