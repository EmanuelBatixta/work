import mongoose from 'mongoose'

const UserSchema = new mongoose.Schema(
  {
    googleId: String,
    userName: String,
  },
  { timestamps: true },
)

const user = mongoose.model('User', UserSchema)

export default user
