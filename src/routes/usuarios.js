import ctrl from '../controllers/usuarios.js'
import { Router } from 'express'
import validate from '../utils/account-validatior.js'
//import util from '../utils/index.js'
const router = Router()

// Create user - No authentication required
router.post(
  '/',
  /* #swagger.tags = ['User']
     #swagger.description = ''
     #swagger.security = []
  */
  validate.rules(),
  validate.userData,
  ctrl.create,
)

// // Login user - Requires email and password
// router.post(
//   '/login',
//   /*
//     #swagger.tags = ['User']
//     #swagger.description = 'Login a user'
//     #swagger.security = []
//   */
//   validate.login(),
//   validate.loginData,
//   ctrl.login,
// )

//router.use(util.requireAuth)
// Get all users - No authentication required
router.get(
  '/',
  /* #swagger.tags = ['User']
     #swagger.description = ''
     #swagger.security = [{"cookieAuth": []}]
  */
  ctrl.get,
)

// // Logout user - Requires authentication (JWT cookie)
// router.get(
//   '/logout',
//   /* #swagger.tags = ['User']
//      #swagger.description = 'Logout a user'
//      #swagger.security = [{"cookieAuth": []}]
//   */
//   ctrl.logout,
// )

// Get user by ID - No authentication required
router.get(
  '/:id',
  /* #swagger.tags = ['User']
     #swagger.description = ''
     #swagger.security = [{"cookieAuth": []}]
  */
  ctrl.getId,
)

// Update user - Requires password in body
router.put(
  '/:id',
  /* #swagger.tags = ['User']
     #swagger.description = ''
     #swagger.security = [{"cookieAuth": []},{"passwordAuth": []}]
  */
  validate.rules(),
  validate.userData,
  ctrl.update,
)

// Delete user - Requires password in body
router.delete(
  '/:id',
  /* #swagger.tags = ['User']
     #swagger.description = ''
     #swagger.security = [{"cookieAuth": []},{"passwordAuth": []}]
  */
  ctrl.delete,
)

export default router
