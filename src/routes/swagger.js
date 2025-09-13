import { Router } from 'express';
import swaggerUi from 'swagger-ui-express';
import { createRequire } from 'module';
const require = createRequire(import.meta.url);
import dotenv from 'dotenv';

dotenv.config()
let swaggerDocument;

process.env.ENV == "development" ? swaggerDocument = require('../swagger/dev.swagger.json') : swaggerDocument = require('../swagger/swagger.json');

const router = Router();

router.use('/', swaggerUi.serve);
router.get('/', swaggerUi.setup(swaggerDocument))

export default router;
