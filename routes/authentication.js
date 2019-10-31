const express = require("express");
const router = express.Router();
const passport = require("../passport");


// Login Page
// router.get("/signin", (req, res) => res.send("Login"));

// Signup Page
// router.get("/signup", (req, res) => res.send("Signup"));


router.post("/authentication/signup", (req, res, next) => {

  // Custom Passport Callback
  passport.authenticate("local-signup", function(error, user, info) {

    if (error) {
      return res.status(500).json({
        message: error || "Ooops, something happened"
      })
    }

    return res.json(user)

  })(req, res, next);
})


router.post("/authentication/signin", function(req, res, next) {
  // Custom Passport Callback
  passport.authenticate("local-signin", function(error, user, info) {

    if (error) {
      return res.status(500).json({
        message: error || "Ooops, something happened"
      })
    }

    return res.json(user)

  })(req, res, next);
});

module.exports = router;