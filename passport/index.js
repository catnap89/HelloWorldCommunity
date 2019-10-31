const passport = require("passport");

// Import all the strategies
const SigninStrategy = require("./SigninStrategy");
const SignupStrategy = require("./SignupStrategy");

// passport.use the strategy that we want to use
// the first parameter in string can be named as anything
passport.use("local-signin", SigninStrategy);
passport.use("local-signup", SignupStrategy);

// this index.js brings passport, brings strategy configure them and export them

module.exports = passport;