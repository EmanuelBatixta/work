import mongoose from 'mongoose'

const garantiaSchema = new mongoose.Schema(
  {
    fname: String,
    lname: String,
    keys: [Number], // array de strings, pode estar vazio
    item: String,
    status: {
      type: String,
      enum: ['pending', 'sent', 'approved', 'rejected'],
      default: 'sent',
    },
    observations: String,
    createdBy: String,
    updatedBy: String,
  },
  { timestamps: true },
)

const model = mongoose.model('Garantia', garantiaSchema, 'TERMOTEC')

export default model
