import mongoose from 'mongoose'

const usuarioSchema = new mongoose.Schema(
  {
    fname: String,
    lname: String,
    email: {
      type: String,
      unique: true,
      required: true,
      match: [/^\S+@\S+\.\S+$/, 'Email inválido'],
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: ['client', 'employee', 'adm'],
      default: 'client',
    },
  },
  { timestamps: true },
)

const model = mongoose.model('Usuario', usuarioSchema, 'TERMOTEC')

export default model
