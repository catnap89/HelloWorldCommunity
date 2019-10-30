
const communityController = require("../controllers/communityController");
const userController = require("../controllers/userController");


module.exports = function(app) {

app.get("/api/community/all", function(req, res) {
  
    var query = {};
    communityController.get(query, function(data) {
      res.json(data);
    });

});


app.get("/api/community/:community_name", function(req, res) {
    var query = {};
    query.communityName = req.params.community_name;
    
    communityController.get(query, function(data) {
        res.json(data);
    });
});


app.get("/api/user/all", function(req, res) {
     var query = {};
     userController.get(query, function(data) {
         res.json(data);
     });
});


app.get("/api/users/:username", function(req, res) {
    var query = {};
    query.userName = req.params.username
    userController.get(query, function(data) {
         res.json(data);
    });
});


app.post("/api/community", function (req, res) {
    
    var newCommunity = {
        communityName: req.body.communityName,
        admin: req.body.admin,
        bannedList: req.body.bannedList
    }
    
    communityController.save(newCommunity, function(data) {
       res.json(data);
    });
});


app.post("/api/user", function(req, res) {
  var newUser = {
      
  }
});


}