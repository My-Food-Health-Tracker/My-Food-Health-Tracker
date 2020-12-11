
const User = require('../models/User.js');
const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');
const passport = require('passport');

passport.serializeUser((user, done) => {
  done(null, user._id);
  console.log(`This is the user from passport`, user)
});

passport.deserializeUser((id, done) => {
  User.findById(id)
    .then(dbUser => {
      done(null, dbUser);
    })
    .catch(error => {
      done(error);
    })
});

passport.use(
  new LocalStrategy({ usernameField: "email", passwordField: "password" }, (email, password, done) => {
    User.findOne({ email: email })
      .then(found => {
        if (found === null) {
          done(null, false, { message: 'hahahhaWrong Credentials' })
        } else if (!bcrypt.compareSync(password, found.password)) {
          done(null, false, { message: 'hihihiWrong Credentials' })
        } else {
          done(null, found);
        }
      })
      .catch(error => {
        done(error, false);
      })
  })
)