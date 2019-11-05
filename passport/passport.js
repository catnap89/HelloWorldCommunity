const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const bcrypt = require("bcryptjs");

// Load User model
const User = require("../models/User");

passport.use(
  new LocalStrategy((username, password, done) => {
    // Match user
    User.findOne({ username: username })
      .then(user => {
        if (!user) {
          return done(null, false, {msg: "That username does not exist"});
        }

        // Match password
        bcrypt.compare(password, user.password, (err, isMatch) => {
          if(err) throw err;
          if(isMatch) {
            return done(null, user);
          } else {
            return done(null, false, { msg: "Password incorrect"});
          }
        })
      })
  })
)



passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  User.findById(id, function(err, user) {
    done(err, user);
  });
});



module.exports = passport;