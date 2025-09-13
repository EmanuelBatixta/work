import ctrl from '../controllers/garantias.js'
import { Router } from 'express'

const router = Router()

router.post('/', ctrl.createGarantia)
router.get('/', ctrl.getGarantias)
router.get('/:id', ctrl.getGarantiasById)
router.put('/:id', ctrl.updateGarantias)
router.delete('/:id', ctrl.deleteGarantias)

export default router