import ctrl from '../controllers/garantias.js'
import { Router } from 'express'
import validate from '../utils/warranty-validator.js'
import util from '../utils/index.js'

const router = Router()

//Middlewares

//router.use(util.requireAuth)

// Create a new warranty - Requires JWT authentication via cookie
router.post(
  '/',
  /* #swagger.tags = ['Warranty']
     #swagger.description = 'Create a new warranty record. Requires authentication via JWT cookie.'
     #swagger.security = [{"cookieAuth": []}]
  */
  validate.rules(),
  validate.garData,
  ctrl.createGarantia,
)
// Get all warranties - Requires JWT authentication via cookie
router.get(
  '/',
  /* #swagger.tags = ['Warranty']
     #swagger.description = 'Retrieve all warranty records. Requires authentication via JWT cookie.'
     #swagger.security = [{"cookieAuth": []}]
  */
  util.handleError(ctrl.getGarantias),
)
// Get warranty by ID - Requires JWT authentication via cookie
router.get(
  '/:id',
  /* #swagger.tags = ['Warranty']
     #swagger.description = 'Retrieve a warranty record by its ID. Requires authentication via JWT cookie.'
     #swagger.security = [{"cookieAuth": []}]
  */
  util.handleError(ctrl.getGarantiasById),
)
// Update warranty by ID - Requires JWT authentication via cookie
router.put(
  '/:id',
  /* #swagger.tags = ['Warranty']
     #swagger.description = 'Update a warranty record by its ID. Requires authentication via JWT cookie.'
     #swagger.security = [{"cookieAuth": []}]
  */
  validate.rules(),
  validate.garData,
  ctrl.updateGarantias,
)
// Delete warranty by ID - Requires JWT authentication via cookie
router.delete(
  '/:id',
  /* #swagger.tags = ['Warranty']
     #swagger.description = 'Delete a warranty record by its ID. Requires authentication via JWT cookie.'
     #swagger.security = [{"cookieAuth": []}]
  */
  util.handleError(ctrl.deleteGarantias),
)

export default router
