import { Router } from 'express'
import passport from 'passport'

// eslint-disable-next-line no-unused-vars
import passportSetup from '../config/passport.js'

const router = Router()

router.get('/login', (req, res) => {
  /* 
    #swagger.tags = ['Auth']
    #swagger.security = [{"cookieAuth": []}]
  */
  res.send('Login Page')
})

router.get('/logout', (req, res) => {
  /* 
    #swagger.tags = ['Auth']
    #swagger.security = [{"cookieAuth": []}]
  */
  req.logout()
  res.redirect('/v1/')
})

router.get(
  '/google',
  /* 
    #swagger.tags = ['Auth']
    #swagger.ignore = true
  */
  passport.authenticate('google'),
)

router.get(
  '/google/redirect',
  /* 
    #swagger.tags = ['Auth']
    #swagger.ignore = true
  */
  passport.authenticate('google', {
    failureRedirect: '/v1/auth/login',
    successRedirect: '/v1/',
  }),
  (req, res) => {
    res.send('you reached the callback URI')
  },
)

export default router
