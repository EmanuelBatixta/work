import garantias from '../models/warranty.js'

const ctrl = {}

ctrl.createGarantia = async (req, res) => {
  const { fname, lname, keys, item, status, observations, sales } = req.body
  try {
    const result = await garantias.create({
      fname,
      lname,
      keys,
      item,
      status,
      observations,
      sales,
    })
    if (result) {
      res.status(201).json(result)
    } else {
      res.status(400).json({ error: 'Error to create warranty' })
    }
  } catch (e) {
    res.status(500).json({ error: e.message })
    throw new Error(e)
  }
}

ctrl.getGarantias = async (req, res) => {
  try {
    const result = await garantias.find()
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

ctrl.getGarantiasById = async (req, res) => {
  try {
    const { id } = req.params
    const result = await garantias.findById(id)
    if (result) {
      res.status(200).json(result)
    } else {
      res.status(404).json({ error: 'Warranty not found' })
    }
  } catch (e) {
    res.status(500).json({ error: e.message })
    throw new Error(e)
  }
}

ctrl.updateGarantias = async (req, res) => {
  try {
    const { id } = req.params
    const { fname, lname, keys, item, status, observations, sales } = req.body
    const result = await garantias.findByIdAndUpdate(id, {
      fname,
      lname,
      keys,
      item,
      status,
      observations,
      sales,
    })
    if (result) {
      res.status(201).json(result)
    } else {
      res
        .status(400)
        .json({ error: 'Error updating warranty', message: result })
    }
  } catch (e) {
    res.status(500).json({ error: e.message })
    throw new Error(e)
  }
}

ctrl.deleteGarantias = async (req, res) => {
  const { id } = req.params
  try {
    const result = await garantias.findByIdAndDelete(id)
    if (result) {
      res.status(204).json({ message: 'Warranty deleted' })
    } else {
      res
        .status(400)
        .json({ error: 'Error deleting warranty', message: result })
    }
  } catch (e) {
    res.status(500).json({ error: e.message })
    throw new Error(e)
  }
}

export default ctrl
