import product from '../models/product.js'

const ctrl = {}

ctrl.createProduct = async (req, res) => {
  const { productName, price, stock, value } = req.body
  try {
    const result = await product.create({
      productName,
      price,
      stock,
      value,
    })
    if (result) {
      res.status(201).json(result)
    } else {
      res.status(400).json({ error: 'Error to create product' })
    }
  } catch (e) {
    res.status(500).json({ error: e.message })
    throw new Error(e)
  }
}

ctrl.updateProduct = async (req, res) => {
  try {
    const { id } = req.params
    const { productName, price, stock, value } = req.body
    const result = await product.findByIdAndUpdate(
      id,
      {
        productName,
        price,
        stock,
        value,
      },
      { new: true, timestamps: true },
    )
    if (result) {
      res.status(201).json(result)
    } else {
      res.status(400).json({ error: 'Error updating product', message: result })
    }
  } catch (e) {
    res.status(500).json({ error: e.message })
    throw new Error(e)
  }
}

ctrl.getProducts = async (req, res) => {
  try {
    const result = await product.find()
    if (result) {
      res.status(200).json(result)
    } else {
      res.status(400).json({ error: 'No data found' })
    }
  } catch (e) {
    res.status(500).json({ error: e.message })
    throw new Error(e)
  }
}

ctrl.getProductById = async (req, res) => {
  try {
    const { id } = req.params
    const result = await product.findById(id)
    if (result) {
      res.status(200).json(result)
    } else {
      res.status(400).json({ error: 'Product not found' })
    }
  } catch (e) {
    res.status(500).json({ error: e.message })
    throw new Error(e)
  }
}

ctrl.deleteProduct = async (req, res) => {
  const { id } = req.params
  try {
    const result = await product.findByIdAndDelete(id)
    if (result) {
      res.status(204).json({ message: 'Product deleted' })
    } else {
      res.status(400).json({ error: 'Error deleting product', message: result })
    }
  } catch (e) {
    res.status(500).json({ error: e.message })
    throw new Error(e)
  }
}

export default ctrl
