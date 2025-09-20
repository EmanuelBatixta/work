import { Router } from 'express'
import garantiasRoutes from './garantias.js'
import swaggerRoutes from './swagger.js'
import userRoutes from './usuarios.js'
//import util from '../utils/index.js'

const main = Router()

main.get('/', async (req, res) => {
  res.render('index.ejs', {
    message: 'Esta rodando',
  })
})

//main.use(util.verifyToken)

/*Warranty*/
main.use('/warranty', garantiasRoutes)

/*User*/
main.use('/user', userRoutes)

/*Docs*/
main.use('/api-docs', swaggerRoutes)
export default main
