import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'

dotenv.config()
const util = {}

util.verifyToken = (req, res, next) => {
  res.locals.loggedin = false

  if (req.cookies.OrbiJWT) {
    jwt.verify(
      req.cookies.OrbiJWT,
      process.env.ACCESS_TOKEN_SECRET,
      function (err, accountData) {
        if (err) {
          res.clearCookie('OrbiJWT')
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
  if (!req.cookies.OrbiJWT) {
    return res.status(401).send({ message: 'unauthorized' })
  }
  jwt.verify(
    req.cookies.OrbiJWT,
    process.env.ACCESS_TOKEN_SECRET,
    function (err, accountData) {
      if (err) {
        res.clearCookie('OrbiJWT')
        return res.status(401).send({ message: 'unauthorized' })
      }
      req.user = accountData
      next()
    },
  )
}

util.authCheck = (req, res) => {
  if (req.user) {
    res.redirect('/dashboard')
  }
}

util.handleError = (fn) => (req, res, next) =>
  Promise.resolve(fn(req, res, next)).catch(next)

export default util
