const mongoose = require('mongoose')

const { Schema } = mongoose

const userSchema = new Schema({
  googleId: String,
  facebookId: String,
  purchaseHistory: Array
})

mongoose.model('users', userSchema)
