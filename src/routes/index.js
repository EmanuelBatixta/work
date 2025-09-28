import { Router } from 'express'
import garantiasRoutes from './garantias.js'
import swaggerRoutes from './swagger.js'
import productRoutes from './product.js'
import authRoutes from './auth.js'
import util from '../utils/index.js'

const main = Router()

// Home route - renders the main index page
main.get('/', async (req, res) => {
  res.render('index.ejs', {
    message: 'Esta rodando',
  })
})

// Middleware to verify JWT Token (applies to all routes below)
// main.use(util.verifyToken)

// Authentication routes (login, logout, OAuth, etc.)
main.use('/auth', authRoutes)

/* ******************
 * Protected Routes (require authentication)
 * *****************/

// Middleware to require authentication for all routes below
main.use(util.requireAuth)

// Swagger API documentation route (protected)
main.use('/api-docs', swaggerRoutes)

// main.use(util.authCheck)
// Routes (protected)
main.use('/warranty', garantiasRoutes)
main.use('/product', productRoutes)

export default main
