
const communityController = require("../controllers/communityController");
const userController = require("../controllers/userController");


module.exports = function(app) {


    app.get("/", function(req, res) {
      res.send("TESTING");
    });

    
    
    //get all communities
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


    app.get("/api/user/:username", function(req, res) {
        var query = {};
        query.userName = req.params.username
        userController.get(query, function(data) {
            res.json(data);
        });
    });


    app.post("/api/community", function (req, res) {
        
        var newCommunity = {
            communityName: req.body.communityName,
            userAdmin: req.body.userAdmin,
            bannedList: req.body.bannedList
        }
        
        communityController.save(newCommunity, function(data) {
        res.json(data);
        });
    });


    app.post("/api/user", function(req, res) {
    var newUser = {
        firstName : req.body.firstName,  
        lastName : req.body.lastName,
        userName : req.body.userName,
        password : req.body.password,
        joinedCommunityIDs : req.body.joinedCommunityIDs,
        ownedCommunityIDs : req.body.ownedCommunityIDs,
        bannedCommunityIDs : req.body.bannedCommunityIDs,
        isAdmin : req.body.isAdmin,
        favoriteCommunityIDs : req.body.favoriteCommunityIDs,
        email : req.body.email
    }

    userController.save(newUser, function(data) {
        res.json(data);
    });
    });


    app.delete("/api/community/:community_name", function(req, res) {
        var query = {};
        query.communityName = req.params.community_name;

        communityController.delete(query, function(err, data) {
            res.json(data);
        });
    });


    app.delete("/api/user/:username", function(req, res) {
        var query = {};
        query.userName = req.params.username;

        userController.delete(query, function(err, data) {
            res.json(data);
        });
    });


    app.patch("/api/user/", function(req, res) {
        userController.update(req.body, function(err, data) {
            res.json(data);
        });  
    });


    app.patch("/api/community/", function(req, res) {
        communityController.update(req.body, function(err, data) {
            res.json(data);
        });
    });

}