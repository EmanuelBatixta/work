import { body, validationResult } from 'express-validator'
const validate = {}

validate.rules = () => {
  return [
    body('fname').trim().notEmpty().isLength({ min: 3 }).isString(),
    body('lname').trim().notEmpty().isLength({ min: 3 }).isString(),
    body('email').trim().notEmpty().isEmail().withMessage('Invalid email'),
    body('password').trim().notEmpty().isStrongPassword({
      minLength: 6,
      minLowercase: 1,
      minUppercase: 1,
      minNumbers: 1,
      minSymbols: 1,
    }),
  ]
}

validate.userData = (req, res, next) => {
  //const { fname, lname, email, password } = req.body
  let errors = []
  errors = validationResult(req)
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() })
  }

  next()
}

validate.login = () => {
  return [
    body('email').trim().notEmpty().isEmail().withMessage('Invalid email'),
    body('password').trim().notEmpty().isStrongPassword({
      minLength: 6,
      minLowercase: 1,
      minUppercase: 1,
      minNumbers: 1,
      minSymbols: 1,
    }),
  ]
}

validate.loginData = (req, res, next) => {
  let errors = []
  errors = validationResult(req)
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() })
  }

  next()
}

export default validate
