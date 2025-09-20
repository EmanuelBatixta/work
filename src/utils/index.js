import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'

dotenv.config()
const util = {}

util.verifyToken = (req, res, next) => {
  res.locals.loggedin = false

  if (req.cookies.jwt) {
    jwt.verify(
      req.cookies.jwt,
      process.env.ACCESS_TOKEN_SECRET,
      function (err, accountData) {
        if (err) {
          res.clearCookie('jwt')
          return res.status(401).send({ message: 'unauthorized' })
        }
        if (!res.locals.accountData) {
          res.locals.accountData = accountData
        }
        res.locals.loggedin = true
        next()
      },
    )
  } else {
    next()
  }
}

util.requireAuth = (req, res, next) => {
  if (!req.cookies.jwt) {
    return res.status(401).send({ message: 'unauthorized' })
  }
  jwt.verify(
    req.cookies.jwt,
    process.env.ACCESS_TOKEN_SECRET,
    function (err, accountData) {
      if (err) {
        res.clearCookie('jwt')
        return res.status(401).send({ message: 'unauthorized' })
      }
      req.user = accountData
      next()
    },
  )
}

export default util
