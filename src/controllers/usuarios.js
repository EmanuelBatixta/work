import usuarios from '../models/usuario.js'
import bcrypt from 'bcryptjs'

const ctrl = {}

ctrl.create = async (req, res) => {
  const { fname, lname, email, password } = req.body

  let hashedPassword
  try {
    hashedPassword = await bcrypt.hashSync(password, 10)
  } catch (error) {
    res
      .status(400)
      .json({ message: 'error creating your account:' + error.message })
  }

  const result = await usuarios.create({
    fname,
    lname,
    email,
    password: hashedPassword,
  })

  if (result) {
    res.status(201).json(result)
  } else {
    res.status(400).json({ message: 'error creating your account' })
  }
}

ctrl.get = async (req, res) => {
  const result = await usuarios.find()

  if (result) {
    res.status(200).json(result)
  } else {
    res.status(400).json({ message: 'error found data' })
  }
}

ctrl.getId = async (req, res) => {
  const { id } = req.params
  const result = await usuarios.findById(id)
  if (result) {
    res.status(200).json(result)
  } else {
    res.status(400).json({ message: 'error found data' })
  }
}

ctrl.update = async (req, res) => {
  const { id } = req.params
  const { fname, lname, email } = req.body
  const existEmail = await usuarios.find({ email: email })
  //const compare = bcrypt.compareSync(password, existEmail.password)
  delete existEmail.password

  const result = await usuarios.findByIdAndUpdate(id, {
    fname,
    lname,
    email,
  })

  if (result) {
    res.status(201).json(result)
  } else {
    res.status(400).json('no possible update now')
  }
}

ctrl.delete = async (req, res) => {
  const { id } = req.params
  const user = await usuarios.find({ id: id })
  //const compare = bcrypt.compareSync(password, user.password)
  delete user.password

  const result = await usuarios.findByIdAndDelete(id)
  if (result) {
    res.status(204).json({ message: 'user deleted' })
  } else {
    res.status(400).json({ message: 'error deleting user' })
  }
}

export default ctrl
