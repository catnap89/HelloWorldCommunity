const express = require("express");
const router = express.Router();
const passport = require("../passport/passport");
const bcrypt = require("bcryptjs");
// User model
const User = require('../models/User');


router.post("/auth/register", (req, res) => {

  const {username, email, password} = req.body;

  // Simple validation
  if (!username || !email || !password) {
    return res.status(400).send({ msg: "Please enter all fields"});
  }

  // Check for existing user
  User.findOne({ username })
    .then(user => {
      if (user) {
        return res.status(400).send({ msg: "User already exists"});
      } else {

        const newUser = new User({
          username,
          email,
          password
        });

        bcrypt.genSalt(10, (err, salt) => {
          bcrypt.hash(newUser.password, salt, (err, hash) => {
            if(err) throw err;
            newUser.password = hash;
            newUser.save()
              .then(user => {
                // req.flash(
                //   "success_msg",
                //   "You are now registered and can log in"
                // );
                res.send({
                  msg: "User created successfully!",
                  user: newUser
                });
                // res.redirect("/login");
              })
              .catch(err => console.log(err));
          })
        })
      }
    })
})

// This one works
// router.post("/auth/login", (req, res, next) => {
// //   // Custom Passport Callback
//   passport.authenticate("local", {
//     successRedirect: '/'
//     })(req, res, result => {
//       req.login(req.user, (err) => {d
//         if (err) { 
//           return next(err);
//           console.log("hit error block")
//           return res.status(505).send({msg: "Wrong Username or Password"}); 
//         }
//         console.log(req.user);
//         res.send({success: true, msg: 'User logged in successfully!', user: req.user});
//       });
//     });
// });

// Login
// Also works
router.post("/auth/login", (req, res, next) => {
  passport.authenticate("local", {
    successRedirect: "/",
    failureFlash: true
  })(req, res, next);
});



router.get('/auth/isauth', (req, res) => {
  res.send({user: req.user});
})


router.get('/auth/logout', (req, res) => {
  req.logout();
  res.send({ msg: "Logged out successfully!"});
})


module.exports = router;