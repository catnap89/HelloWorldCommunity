const express = require("express");
const router = express.Router();
const passport = require("../passport");
const User = require('../models/User');

// Login Page
// router.get("/signin", (req, res) => res.send("Login"));

// Signup Page
// router.get("/signup", (req, res) => res.send("Signup"));

// function one(req, res, next) {
//   next()
// }

// function two() {

// }

router.post("/signup", (req, res) => {

  User.findOne({
    email: req.body.email
  }).then(user => {
    if ( !user ) {
      User.create({
        email: req.body.email,
        username: req.body.username,
        password: req.body.password
      }).then(new_user => {
        req.login(new_user, (err) => {
          if (err) { 
            return res.status(505).send({message: err}); 
          }
          console.log(req.user);
          res.send({success: true, message: 'User created successfully!', user: new_user});
        });
      }) 
    } else {
      res.status(500).send({message: 'User already exists'});
    }
  })
})


router.post("/signin", function(req, res, next) {
  // Custom Passport Callback
  passport.authenticate("local-signin")(req, res, result => {
      res.send({ user: req.user, success: 1 });
  });;
});

router.get('/isauth', (req, res) => {
  console.log(req.user);
  res.send({user: req.user});
})

module.exports = router;