import passport from 'passport'
import { Strategy as GoogleStrategy } from 'passport-google-oauth20'
import user from '../models/user.js'

passport.serializeUser((user, done) => {
  done(null, user)
})

passport.deserializeUser((id, done) => {
  user.findById(id).then((user) => {
    done(null, user)
  })
})

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: process.env.CALLBACK_URL,
      scope: ['profile'],
      state: true,
    },
    (accessToken, refreshToken, profile, done) => {
      user.findOne({ googleId: profile.id }).then((existingUser) => {
        if (existingUser) {
          done(null, existingUser)
        } else {
          new user({
            googleId: profile.id,
            username: profile.displayName,
          })
            .save()
            .then((newUser) => {
              done(null, newUser)
            })
        }
      })
    },
  ),
)

export default passport
