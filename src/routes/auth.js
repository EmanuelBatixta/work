// Import necessary modules
import { Router } from 'express'
import passport from 'passport'
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
router.get('/logout', (req, res) => {
  /* 
    #swagger.tags = ['Auth']
    #swagger.security = [{"cookieAuth": []}]
  */
  req.logout()
  res.redirect('/v1/')
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
    successRedirect: '/v1/api-docs',
  }),
  (req, res) => {
    res.send('you reached the callback URI')
  },
)

// Export the router to be used in the main app
export default router
