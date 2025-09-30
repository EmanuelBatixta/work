import express from 'express'
import dotenv from 'dotenv'
import main from './src/db/index.js'
import index from './src/routes/index.js'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import session from 'express-session'
import passport from 'passport'
//import passportSetup from './src/config/passport.js'

dotenv.config()

const app = express()
app
  .use(express.json())
  .use(express.urlencoded({ extended: true }))
  .use(
    cors({
      origin: '*',
      credentials: true,
    }),
  )
  .use(cookieParser())
  .use(
    session({
      name: 'OrbiCRM',
      secret: process.env.SESSION_SECRET,
      resave: true,
      saveUninitialized: true,
      cookie: {
        maxAge: 24 * 60 * 60 * 1000,
        httpOnly: true,
        secure: process.env.NODE_ENV === 'development' ? false : true,
        //keys: [process.env.ACCESS_TOKEN_SECRET],
      },
    }),
  )
  .use(passport.initialize())
  .use(passport.session())

app.set('view engine', 'ejs')

//routes
app.use('/v1/', index)

// eslint-disable-next-line no-unused-vars
app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).json({ error: err.message })
})

//server
app.listen(process.env.PORT, () => {
  main()
  console.log(
    `🔥 Server running on http://localhost:${process.env.PORT}/v1/auth/google 🔥`,
  )
})
