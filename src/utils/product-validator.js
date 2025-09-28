import { body, validationResult } from 'express-validator'
const validate = {}

validate.rules = () => {
  return [
    body('productName')
      .trim()
      .notEmpty()
      .withMessage('Insert a valid product name')
      .isString(),

    body('price')
      .trim()
      .notEmpty()
      .withMessage('Insert a valid price')
      .isNumeric(),

    body('stock').isNumeric().optional().trim(),

    body('value')
      .trim()
      .notEmpty()
      .withMessage('Insert a valid value')
      .isNumeric(),
  ]
}

validate.productData = (req, res, next) => {
  //const { fname, lname, keys, item, status, observations, nf } = req.body

  let errors = []

  errors = validationResult(req)

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() })
  }

  next()
}

export default validate
