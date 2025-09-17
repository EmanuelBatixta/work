import { Router } from 'express'
import swaggerUi from 'swagger-ui-express'
import { createRequire } from 'module'
const require = createRequire(import.meta.url)
import dotenv from 'dotenv'

dotenv.config()
let swaggerDocument
/*
process.env.ENV == 'development'
  ? (swaggerDocument = require('../swagger/dev.swagger.json'))
  : (swaggerDocument = require('../swagger/swagger.json'))
*/
swaggerDocument = require('../swagger/swagger.json')
const router = Router()
//#swagger.tags = ['docs's])
router.use('/', swaggerUi.serve)
router.get(
  '/',
  /* #swagger.tags = ['Docs']
     #swagger.description = ''
  */
  swaggerUi.setup(swaggerDocument),
)

export default router
