import mongoose from 'mongoose'

const garantiaSchema = new mongoose.Schema(
  {
    productName: String,
    price: Number,
    stock: Number,
    value: Number,
  },
  { timestamps: true },
)

const model = mongoose.model('Product', garantiaSchema, 'TERMOTEC')

export default model
