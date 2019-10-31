const express = require("express"); // run npm i express to install 
const mongoose = require("mongoose"); // run npm i mongoose to install
const passport = require("./passport");
const routes = require("./routes");
const authenticationRoute = require("./routes/authentication");
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

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/HelloWorldDB");

// Define API routes here
app.use(routes)
require("./routes/apiRoutes")(app);

app.use("/", authenticationRoute);
// to use passport
app.use(passport.initialize());
// app.use(passport.session());


app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
