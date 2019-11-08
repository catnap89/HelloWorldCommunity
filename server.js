const express = require("express"); 
const mongoose = require("mongoose"); 
const passport = require("./passport/passport");
const session = require('express-session');
const flash = require("connect-flash");
const api_routes = require("./routes/apiRoutes");
const auth_routes = require("./routes/auth_routes");
const path = require("path");
const io = require("socket.io");
require('dotenv').config();

const PORT = process.env.PORT || 5000;

const app = express();

io.on("connection", (socket) => {
  console.log("User is connected.");

  socket.on("disconnect", () => {
    console.log("User has left!");
  })

  socket.on("chat", function(msg) {
    console.log("message" + msg)
    io.emit("chat", msg)
  })
});

// Serve up static assets (usually on heroku)
// Give the client/browser access to front end files
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// bodyparser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


var db = process.env.MONGODB_URI || "mongodb://localhost/HelloWorldDB";
// var db = process.env.MONGODB_URI || "mongodb://user:password1@ds141248.mlab.com:41248/heroku_v498c1zn";

// Connect to the Mongo DB
mongoose.connect(db, {useCreateIndex: true, useNewUrlParser: true, useUnifiedTopology: true}, function(err) {
  if (err) {
    console.log(err);
  }

  else {
    console.log("mongoose connection is successful");
  }
});

// Express Session
//Store secret to .env file -- process.env.SECRET --> must have dotenv package and call dotenv.config() up top in server file
app.use(session({
  secret: process.env.SECRET,
  // Traversy Uses True
  resave: false,
  // Traversy Uses True
  saveUninitialized: false,
  // not sure if I need this
  proxy: true
}));

// // Connect Flash
// app.use(flash());

// // Gloal variable
// app.use((req, res, next) => {
//   res.locals.success_msg = req.flash("success_msg");
//   res.locals.error_msg = req.flash("error_msg");
//   next();
// });

app.use(passport.initialize());
app.use(passport.session());


// Routes

// Attach any API/Data/Auth routes to the server
// Must come before the catch all route
app.use(api_routes);
app.use(auth_routes);

// Catch All Route -- catches any other route that's not setup and will send the react index.html file,
// so React can handle the view routes
app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, 'client/build/index.html'));
});

// start the server
app.listen(PORT, () => {
  console.log(`==> API server now on port ${PORT}!`);
});
