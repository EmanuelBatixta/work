import express from 'express'
import dotenv from 'dotenv'
import main from './src/db/index.js'
import index from './src/routes/index.js'
import cors from 'cors'
import cookieParser from 'cookie-parser'
//import session from 'express-session'

dotenv.config()

const app = express()
app
  .use(express.json())
  .use(express.urlencoded({ extended: true }))
  .use(cors())
  .use(cookieParser())
/*
  .use(
    session({
      secret: process.env.SESSION_SECRET,
      resave: false,
      saveUninitialized: false,
    }),
  )
*/

//routes
app.use('/v1/', index)

//server
app.listen(process.env.PORT, () => {
  main()
  console.log(
    `🔥 Server running on http://localhost:${process.env.PORT}/v1/api-docs 🔥`,
  )
})
