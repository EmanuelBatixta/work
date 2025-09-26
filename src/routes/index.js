import { Router } from 'express'
import garantiasRoutes from './garantias.js'
import swaggerRoutes from './swagger.js'
//import userRoutes from './usuarios.js'
import authRoutes from './auth.js'
import util from '../utils/index.js'

const main = Router()

main.get('/', async (req, res) => {
  res.render('index.ejs', {
    message: 'Esta rodando',
  })
})

/*Docs*/
main.use('/api-docs', swaggerRoutes)

main.use(util.verifyToken)

/*Auth*/
main.use('/auth', authRoutes)

main.use(util.requireAuth)
/*Warranty*/
main.use('/warranty', garantiasRoutes)

/*User*/
//main.use('/user', userRoutes)

export default main
