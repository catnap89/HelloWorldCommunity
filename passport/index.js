const passport = require("passport");
const Strategy = require("passport-local").Strategy;
const User = require("../models/User");


passport.serializeUser(function(user, done) {
  console.log('serial', user);
  done(null, user);
});

passport.deserializeUser(function(user, done) {
  console.log('deserial', user);
  done(null, user);
});

const SigninStrategy = new Strategy(function(username, password, done) {
  User.findOne({ username }).then(user => {
    if (!user) {
      return done("No user found", null)
    }

    // const isPasswordValid = bcrypt.compareSync(password, user.password);

    if (!user.validatePassword(password)) {
      return done("Email or Password not valid", null);
    }
    
    return done(null, user);
    }).catch(err => res.status(500).send({message: err}));
});

// passport.use the strategy that we want to use
// the first parameter in string can be named as anything
passport.use("local-signin", SigninStrategy);
// passport.use("local-signup", SignupStrategy);

// this index.js brings passport, brings strategy configure them and export them

module.exports = passport;