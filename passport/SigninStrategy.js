const Strategy = require("passport-local").Strategy;
const User = require("../models/User");


const SigninStrategy = new Strategy( function(username, password, done) {
  
  User.findOne({ username }).then(user => {
    if (!user) {
      return done("No user found", null)
    }

    // const isPasswordValid = bcrypt.compareSync(password, user.password);

    if (!user.validatePassword(password)) {
      return done("Email or Password not valid", null);
    }
    console.log(user);
    return done(null, user);
    }).catch(err => res.status(500).send({message: err}));
});

module.exports = SigninStrategy;