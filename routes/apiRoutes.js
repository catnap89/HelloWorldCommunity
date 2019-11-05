const router = require("express").Router();
const communityController = require("../controllers/communityController");
const userController = require("../controllers/userController");


//Tester. No functionality
router.get("/", function(req, res) {
    res.send("TESTING");
});

//Returns a specific community
router.get("/api/community/:community_name", function(req, res) {
    var query = {};
    query.communityName = req.params.community_name;
    
    communityController.get(query, function(data) {
        res.json(data);
    });
});

//returns all users
router.get("/api/user/all", function(req, res) {
    var query = {};
    userController.get(query, function(data) {
        res.json(data);
    });
});

//Returns a specific user
router.get("/api/user/:username", function(req, res) {
    var query = {};
    query.username = req.params.username
    userController.get(query, function(data) {
        res.json(data);
    });
}

//Creates a community
router.post("/api/community", function (req, res) {
    
    var newCommunity = {
        communityName: req.body.communityName,
        userAdmin: req.body.userAdmin,
        bannedList: req.body.bannedList
    }
    
    communityController.save(newCommunity, function(data) {
        res.json(data);
    });
});



//Creates new user
router.post("/api/user", function(req, res) {
    var newUser = {
        firstName : req.body.firstName,  
        lastName : req.body.lastName,
        username : req.body.username,
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


//Deletes Community
router.delete("/api/community/:community_name", function(req, res) {
    var query = {};
    query.communityName = req.params.community_name;
});


//Deletes a user from the database

router.delete("/api/user/:username", function(req, res) {
    var query = {};
    query.username = req.params.username;

    userController.delete(query, function(err, data) {
        res.json(data);
    })
});


//Adds a community to the User's list of communities
router.patch("/api/user/add/:communityType/:community_name/:username", function(req, res) {

    var details = {
        username : req.params.username,
        communityName: req.params.community_name,
        type: req.params.communityType
    }

    userController.addCommunity(details, function(err, data) {  
        res.json(data);
    });  
});


//Removes a community from the User's list of communities
router.patch("/api/user/remove/:communityType/:community_name/:username", function(req, res) {

    var details = {
        username : req.params.username,
        communityName: req.params.community_name,
        type: req.params.communityType
    }

    userController.removeCommunity(details, function(err, data) {  
        res.json(data);
    });  
});




module.exports = router;

