require('dotenv').config();

const express = require("express"); 
const mongoose = require("mongoose"); 
const passport = require("./passport/passport");
const session = require('express-session');
// const flash = require("connect-flash");
const api_routes = require("./routes/apiRoutes");
const auth_routes = require("./routes/auth_routes");
const path = require("path");
const socket = require("socket.io");

const communityController = require("./controllers/communityController");
var Community = require("./models/Community");


const app = express();

const PORT = process.env.PORT || 5000;

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
const server = app.listen(PORT, () => {
  console.log(`==> API server now on port ${PORT}!`);
});

// SocketIO
const io = socket(server);

io.on('connection', function(socket){
  console.log(socket.id);

  // create function to send status
  sendStatus = function(s) {
    socket.emit('status', s);
  }

  socket.on('SEND_MESSAGE', function(data){
    console.log('message: ' + data);
    io.emit('RECEIVE_MESSAGE', data);
    //future implementation: add message to community chat history 
  });

  socket.on('JOIN_CHAT', function(data) {
    //we can update our database with "active users" here
    console.log("JOIN_CHAT DATA: " + JSON.stringify(data));

    let communityId = data.communityID;
    let activeUser = data.user;
    if (communityId && activeUser._id) {
      console.log("adding active user");
      communityController.addActiveUser(communityId, activeUser._id)
      .then( doc => {
        if (doc) {
            console.log("no worries!", doc);
            data.currentActiveUsers = doc.activeUsers.map(user => ({ username: user.username, userId: user._id}));
            console.log("CURRENT ACTIVE", data.currentActiveUsers)
        }
        io.emit("ACTIVE_USERS_CHANGED", data);
      })
      .catch(err => console.log("ERR", err));
    }
  });

  socket.on('LEFT_CHAT', function (data) {
    //we can update our database with "active users" here
    console.log("left chat data:");
    console.log(data);
    let communityId = data.communityID;
    let activeUser = data.user;
      if (communityId && activeUser._id) {
        console.log("removing active user")
        communityController.removeActiveUser(communityId, activeUser._id)
        .then( doc => {
          if (doc) {
              console.log("no worries!", doc);
              data.currentActiveUsers = doc.activeUsers.map(user => ({ username: user.username, userId: user._id}));
              console.log("data.currentActiveUsers", data.currentActiveUsers)
          }
          
          io.emit("ACTIVE_USERS_CHANGED", data);
        })
        .catch(err => console.log(err));
    }
  });

  socket.on("disconnect", function(data) {
    console.log("disconnect");
    console.log(data);
  });
});