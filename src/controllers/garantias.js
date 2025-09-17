import garantias from '../models/garantias.js'

const ctrl = {}

ctrl.createGarantia = async (req, res) => {
  const { fname, lnane, keys, item, status, observations, nf } = req.body
  const result = await garantias.create({
    fname,
    lnane,
    keys,
    item,
    status,
    observations,
    nf,
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
    res.status(400).json({ error: 'Error searching warranty' })
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
  const { lnane, keys, item, status, observations, nf } = req.body
  const result = await garantias.findByIdAndUpdate(id, {
    lnane,
    keys,
    item,
    status,
    observations,
    nf,
  })
  if (result) {
    res.status(201).json(result)
  } else {
    res.status(400).json({ error: 'Error updating warranty' })
  }
}

ctrl.deleteGarantias = async (req, res) => {
  const { id } = req.params
  const result = await garantias.findByIdAndDelete(id)
  if (result) {
    res.status(204).json({ message: 'Warranty deleted' })
  } else {
    res.status(400).json({ error: 'Error deleting warranty' })
  }
}

export default ctrl
