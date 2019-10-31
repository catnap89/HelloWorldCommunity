const express = require("express");
const router = exprss.Router();
const passport = require("../passport");

// passport.authenticate("local-signup", () => {

// });


// GET users listing

router.post("/signup", passport.authenticate("local-signup", {
  successRedirect: "/",
  failureRedirect: "/signup",
  session: false
}))


router.post("/signin", function(req, res, next) {
  res.send("respond with a resource")
});

module.exports = router;