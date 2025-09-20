import { body, validationResult } from 'express-validator'
const validate = {}

validate.rules = () => {
  return [
    body('fname')
      .trim()
      .notEmpty()
      .isLength({ min: 3 })
      .withMessage('Insert a valid name')
      .isString(),

    body('lname')
      .trim()
      .notEmpty()
      .isLength({ min: 3 })
      .withMessage('Insert a valid name')
      .isString(),

    body('keys').isArray().optional(),

    body('keys.*').isNumeric(),

    body('status')
      .isIn(['pending', 'sent', 'approved', 'rejected'])
      .withMessage('Invalid status'),

    body('observations').optional().isString(),

    body('nf').optional().isNumeric().withMessage('NF must be a number'),
  ]
}

validate.garData = (req, res, next) => {
  //const { fname, lname, keys, item, status, observations, nf } = req.body

  let errors = []

  errors = validationResult(req)

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() })
  }

  next()
}

export default validate
