import path from 'path'
import { fileURLToPath } from 'url'
import { Router } from 'express'

const app = Router()

//view mode
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'src', 'viewer'))

export default app
