import express from 'express'
import dotenv from 'dotenv'
import garantiasRoutes from './src/routes/garantias.js'
import swaggerRoutes from './src/routes/swagger.js'
import main from './src/db/index.js'
import cors from 'cors'
import index from './src/routes/index.js'
import { fileURLToPath } from 'url'
import path from 'path'
import userRoutes from './src/routes/usuarios.js'

dotenv.config()

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())

//view mode
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'src', 'viewer'))

//routes
app.use('/', index)
/*Docs*/
app.use('/v1/api-docs', swaggerRoutes)
/*Warranty*/
app.use('/v1/warranty', garantiasRoutes)
/*User*/
app.use('/v1/user', userRoutes)

//server
app.listen(process.env.PORT, () => {
  main()
  console.log(
    `🔥 Server running on http://localhost:${process.env.PORT}/v1/api-docs 🔥`,
  )
})
