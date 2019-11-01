const Strategy = require("passport-local").Strategy;
const User = require("../models/User");


const SignupStrategy = new Strategy( {passReqToCallback: true }, function(req, username, password, done) {
  const email = req.body.email;
  const userName = req.body.username;

  User.findOne({ email }).lean().exec((err, user) => {

    if (err) {

      return done(err, null);
    }
    if (user) {
      return done("User already exist", null)
    }

    const encryptedPassword = bcrypt.hashSync(password, salt);
    let newUser = new User({
      email,
      userName,
      password: encryptedPassword
    });

    newUser.save((inserted,() => {


      return done(null, inserted);
    })
    )
  })
});

module.exports = SignupStrategy; 