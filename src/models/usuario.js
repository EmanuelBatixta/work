import mongoose from 'mongoose'

const usarioSchema = new mongoose.Schema(
  {
    fname: String,
    lname: String,
    email: String,
    password: String,
    role: {
      type: String,
      enum: ['client', 'employee', 'adm'],
      default: 'client',
    },
  },
  { timestamps: true },
)

const model = mongoose.model('Usuario', usarioSchema)

export default model
