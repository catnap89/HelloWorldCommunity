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
  // User.findOne({ username })
  //   .then(user => {
  //     if(user) return res.status(400).send({ msg: "User already exists"});

  //     // if user does not exist, create a new user
  //     User.create({ username, email, password })
  //       .then(newUser => {
  //         // You dont' want to authenticate the user here since they are new and have just registered
  //         // Instead, you want to simply sign them into the session (store)
  //         req.login(newUser, err => {
  //           if(err) {
  //             console.log(err);
  //             return res.status(500).send({ msg: err});
  //           }

  //           res.send({
  //             msg: "User created successfully!",
  //             user: newUser
  //           });
  //         });
  //       });
  //   });

  User.findOne({ username })
    .then(user => {
      if (user) {
        return res.status(400).send({ msg: "User already exists "});
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
                req.flash(
                  "success_msg",
                  "You are now registered and can log in"
                );
                // res.redirect("/auth/login");
              })
              .catch(err => console.log(err));
          })
        })
      }
    })
})


// router.post("/auth/login", (req, res, next) => {
//   // Custom Passport Callback
//   passport.authenticate("local", {
//     successRedirect: '/',
//     failureRedirect: '/login',
//     failureFlash: true  
//     })(req, res, result => {
//   // passport.authenticate("local-signin")(req, res, result => {
//     // res.send({ user: req.user, success: 1 });
//       req.login(req.user, (err) => {
//         if (err) { 
//           return res.status(505).send({msg: "Wrong Username or Password"}); 
//         }
//         console.log(req.user);
//         res.send({success: true, msg: 'User logged in successfully!', user: req.user});
//       });
//     });;
// });


// Login
router.post("/auth/login", (req, res, next) => {
  passport.authenticate("local", {
    successRedirect: "/",
    failureRedirect: "/login",
    failureFlash: true
  }) (req, res, next);
});


router.get('/auth/isauth', (req, res) => {
  res.send({user: req.user});
})


router.get('/auth/logout', (req, res) => {
  req.logout();
  // res.send({ msg: "Logged out successfully!"});
  res.redirect("/login");
})


module.exports = router;