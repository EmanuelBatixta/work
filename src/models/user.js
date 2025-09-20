const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
  googleId: String,
  displayName: String,
  firstName: String,
  lastName: String,
  image: String,
  email: String,
})

const user = mongoose.model('User', UserSchema)

export default user
