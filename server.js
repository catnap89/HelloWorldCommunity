const express = require("express"); // run npm i express to install 
const mongoose = require("mongoose"); // run npm i mongoose to install
const passport = require("./passport");
const session = require('express-session');
// const routes = require("./routes"); // index route?
const authenticationRoute = require("./routes/authentication");
//const apiRoutes = require("./routes/apiRoutes");
// const path = require("path");


const PORT = process.env.PORT || 5000;
const app = express();

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

var db = process.env.MONGODB_URI || "mongodb://localhost/HelloWorldDB";

// Connect to the Mongo DB
mongoose.connect(db, {useCreateIndex: true, useNewUrlParser: true, useUnifiedTopology: true}, function(err) {
  if (err) {
    console.log(err);
  }

  else {
    console.log("mongoose connection is successful");
  }
});

//Store secret to .env file -- process.env.SECRET --> must have dotenv package and call dotenv.config() up top in server file
app.use(session({
  secret: 'yy5MkxmvKyKP6X92HtR50wPONJk4wfPe',
  resave: false,
  saveUninitialized: false,
  proxy: true
}));
app.use(passport.initialize());
app.use(passport.session());


// Routes
// app.use("/", routes);
//app.use("/api", apiRoutes);
require("./routes/apiRoutes")(app);
app.use("/authentication", authenticationRoute);
require("./routes/apiRoutes")(app);



app.listen(PORT, () => {
  console.log(`==> API server now on port ${PORT}!`);
});
