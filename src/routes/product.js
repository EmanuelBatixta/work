import ctrl from '../controllers/product.js'
import { Router } from 'express'
import validate from '../utils/product-validator.js'
import util from '../utils/index.js'

const router = Router()

//Middlewares

//router.use(util.requireAuth)

// Create a new product - Requires JWT authentication via cookie
router.post(
  '/',
  /* #swagger.tags = ['Product']
     #swagger.description = 'Create a new product record. Requires authentication via JWT cookie.'
     #swagger.security = [{"cookieAuth": []}]
  */
  validate.rules(),
  validate.productData,
  ctrl.createProduct,
)
// Get all products - Requires JWT authentication via cookie
router.get(
  '/',
  /* #swagger.tags = ['Product']
     #swagger.description = 'Retrieve all product records. Requires authentication via JWT cookie.'
     #swagger.security = [{"cookieAuth": []}]
  */
  util.handleError(ctrl.getProducts),
)
// Get product by ID - Requires JWT authentication via cookie
router.get(
  '/:id',
  /* #swagger.tags = ['Product']
     #swagger.description = 'Retrieve a product record by its ID. Requires authentication via JWT cookie.'
     #swagger.security = [{"cookieAuth": []}]
  */
  util.handleError(ctrl.getProductById),
)
// Update product by ID - Requires JWT authentication via cookie
router.put(
  '/:id',
  /* #swagger.tags = ['Product']
     #swagger.description = 'Update a product record by its ID. Requires authentication via JWT cookie.'
     #swagger.security = [{"cookieAuth": []}]
  */
  validate.rules(),
  validate.productData,
  ctrl.updateProduct,
)
// Delete product by ID - Requires JWT authentication via cookie
router.delete(
  '/:id',
  /* #swagger.tags = ['Product']
     #swagger.description = 'Delete a product record by its ID. Requires authentication via JWT cookie.'
     #swagger.security = [{"cookieAuth": []}]
  */
  util.handleError(ctrl.deleteProduct),
)

export default router
