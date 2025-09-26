import user from '../models/user.js'

const ctrl = {}

ctrl.findOrCreate = (googleProfile) => {
  const { name, id } = googleProfile
  try {
    const existUser = user.findOne({ googleId: id })
    if (existUser) return existUser
    const newUser = user.create({ googleId: id, name })
    return newUser
  } catch (error) {
    throw new Error('Error finding or creating user' + error.message)
  }
}

export default ctrl
