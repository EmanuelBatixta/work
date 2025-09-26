import garantias from '../models/warranty.js'

const ctrl = {}

ctrl.createGarantia = async (req, res) => {
  const { fname, lname, keys, item, status, observations } = req.body
  const result = await garantias.create({
    fname,
    lname,
    keys,
    item,
    status,
    observations,
  })
  if (result) {
    res.status(201).json(result)
  } else {
    res.status(400).json({ error: 'Error to create warranty' })
  }
}

ctrl.getGarantias = async (req, res) => {
  const result = await garantias.find()
  if (result) {
    res.status(200).json(result)
  } else {
    res.status(400).json({ error: 'No data found' })
  }
}

ctrl.getGarantiasById = async (req, res) => {
  const { id } = req.params
  const result = await garantias.findById(id)
  if (result) {
    res.status(200).json(result)
  } else {
    res.status(404).json({ error: 'Warranty not found' })
  }
}

ctrl.updateGarantias = async (req, res) => {
  const { id } = req.params
  const { fname, lname, keys, item, status, observations } = req.body
  const result = await garantias.findByIdAndUpdate(id, {
    fname,
    lname,
    keys,
    item,
    status,
    observations,
  })
  if (result) {
    res.status(201).json(result)
  } else {
    res.status(400).json({ error: 'Error updating warranty', message: result })
  }
}

ctrl.deleteGarantias = async (req, res) => {
  const { id } = req.params
  const result = await garantias.findByIdAndDelete(id)
  if (result) {
    res.status(204).json({ message: 'Warranty deleted' })
  } else {
    res.status(400).json({ error: 'Error deleting warranty', message: result })
  }
}

export default ctrl
