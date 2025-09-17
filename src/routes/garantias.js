import ctrl from '../controllers/garantias.js'
import { Router } from 'express'

const router = Router()
router.post(
  '/',
  /* #swagger.tags = ['Warranty']
     #swagger.description = ''
  */
  ctrl.createGarantia,
)
router.get(
  '/',
  /* #swagger.tags = ['Warranty']
     #swagger.description = ''
  */
  ctrl.getGarantias,
)
router.get(
  '/:id',
  /* #swagger.tags = ['Warranty']
     #swagger.description = ''
  */
  ctrl.getGarantiasById,
)
router.put(
  '/:id',
  /* #swagger.tags = ['Warranty']
     #swagger.description = ''
  */
  ctrl.updateGarantias,
)
router.delete(
  '/:id',
  /* #swagger.tags = ['Warranty']
     #swagger.description = ''
  */
  ctrl.deleteGarantias,
)

export default router
