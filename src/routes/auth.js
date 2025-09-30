// Import necessary modules
import { Router } from 'express'
import passport from 'passport'
import jwt from 'jsonwebtoken'
// Import passport configuration (Google OAuth setup)
// eslint-disable-next-line no-unused-vars
import passportSetup from '../config/passport.js'

// Create a new router instance for authentication routes
const router = Router()

// Route to render or respond with the login page (protected by cookie-based JWT auth)
router.get('/login', (req, res) => {
  /* 
    #swagger.tags = ['Auth']
    #swagger.security = [{"cookieAuth": []}]
  */
  res.send('Login Page')
})

// Route to log out the user and clear the session/cookie
router.get('/logout', async (req, res, next) => {
  /* 
    #swagger.tags = ['Auth']
    #swagger.security = [{"cookieAuth": []}]
  */
  await req.logout((err) => {
    if (err) {
      console.log(err)
      return next(err)
    }
    res.clearCookie('OrbiJWT')
    res.clearCookie('OrbiCRM')
    res.redirect('/v1/auth/login')
  })
})

// Route to start Google OAuth authentication flow
router.get(
  '/google',
  /* 
    #swagger.tags = ['Auth']
    #swagger.ignore = true
  */
  passport.authenticate('google'),
)

// Callback route for Google OAuth to handle the response after user authenticates with Google
router.get(
  '/google/redirect',
  /* 
    #swagger.tags = ['Auth']
    #swagger.ignore = true
  */
  passport.authenticate('google', {
    failureRedirect: '/v1/auth/login',
    failWithError: true,
  }),
  (req, res) => {
    //console.log(req.user.googleId)
    const payload = { user: req.user }
    const token = jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET, {
      expiresIn: '1d',
    })
    res.cookie('OrbiJWT', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production' ? true : false,
      maxAge: 24 * 60 * 60 * 1000,
    })
    res.redirect('/v1/api-docs')
  },
)

// Export the router to be used in the main app
export default router
