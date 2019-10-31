const router = require("express").Router();
const path = require("path");


// Send every other request to the React app
// Define any API routes before this runs
module.exports = function (app) {
  router.use(function(req, res) {
    res.sendFile(path.join(__dirname, "../client/build/index.html"));
  });
}