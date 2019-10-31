const Strategy = require("passport-local").Strategy;

const SignupStrategy = new Strategy(function(username, password, done) {
  // what should be happening once user is signing up
});

module.exports = SignupStrategy; 