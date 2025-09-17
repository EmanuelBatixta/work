import ctrl from '../controllers/usuarios.js'
import { Router } from 'express'
const router = Router()

router.post(
  '/',
  /* #swagger.tags = ['User']
     #swagger.description = ''
  */
  ctrl.create,
)

router.get(
  '/',
  /* #swagger.tags = ['User']
     #swagger.description = ''
  */
  ctrl.get,
)

router.get(
  '/:id',
  /* #swagger.tags = ['User']
     #swagger.description = ''
  */
  ctrl.getId,
)

router.put(
  '/:id',
  /* #swagger.tags = ['User']
     #swagger.description = 'Atualiza uma garantia pelo ID'
  */
  ctrl.update,
)

router.delete(
  '/',
  /* #swagger.tags = ['User']
     #swagger.description = 'Remove uma garantia'
  */
  ctrl.delete,
)

export default router
