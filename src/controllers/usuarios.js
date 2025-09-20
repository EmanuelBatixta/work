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
      .send({ message: 'error creating your account:' + error.message })
  }

  const result = await usuarios.create({
    fname,
    lname,
    email,
    password: hashedPassword,
  })

  if (result) {
    res.status(201).send(result)
  } else {
    res.status(400).send({ message: 'error creating your account' })
  }
}

ctrl.get = async (req, res) => {
  const result = await usuarios.find()

  if (result) {
    res.status(200).send(result)
  } else {
    res.status(400).send({ message: 'error found data' })
  }
}

ctrl.getId = async (req, res) => {
  const { id } = req.params
  const result = await usuarios.findById(id)
  if (result) {
    res.status(200).send(result)
  } else {
    res.status(400).send({ message: 'error found data' })
  }
}

ctrl.update = async (req, res) => {
  const { id } = req.params
  const { fname, lname, email, password } = req.body
  const existEmail = await usuarios.find({ email: email })
  const compare = bcrypt.compareSync(password, existEmail.password)
  delete existEmail.password

  if (existEmail && compare) {
    const result = await usuarios.findByIdAndUpdate(id, {
      fname,
      lname,
      email,
    })
    if (result) {
      res.status(201).send(result)
    } else {
      res.status(400).send('no possible update now')
    }
  }
}

ctrl.delete = async (req, res) => {
  const { id } = req.params
  const { password } = req.body
  const user = await usuarios.find({ id: id })
  const compare = bcrypt.compareSync(password, user.password)
  delete user.password

  if (compare) {
    const result = await usuarios.findByIdAndDelete(id)
    if (result) {
      res.status(204).send({ message: 'user deleted' })
    } else {
      res.status(400).send({ message: 'error deleting user' })
    }
  } else {
    res.status(401).send({ message: 'data incorrect' })
  }
}

export default ctrl
