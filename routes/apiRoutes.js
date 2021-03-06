const router = require("express").Router();
const communityController = require("../controllers/communityController");
const userController = require("../controllers/userController");


//Tester. No functionality
router.get("/", function(req, res) {
    res.send("TESTING");
});

//returns all communities
router.get("/api/community/all", function(req, res) {
    var query = {};
    communityController.get(query, function(data) {
        res.json(data);
    });
});

//Returns a specific community
router.get("/api/community/:communityId", function(req, res) {
    var query = {};
    // query.communityId = req.params.communityId;
    query._id = req.params.communityId;
    
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
});

//Creates a community
router.post("/api/community", function (req, res) {
    console.log(req.user);
    var newCommunity = {
        communityName: req.body.communityName,
        userAdmin: req.body.userAdmin,
        communityDesc: req.body.communityDesc
    }
    console.log("!!!!!!!!!!community:")
    console.log(newCommunity)
    
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
router.delete("/api/community/:communityId", function(req, res) {
    var query = {};
    query._id = req.params.communityId;

    communityController.delete(query, function(err, data) {
        res.json(data);
    })
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
router.patch("/api/user/add/:communityType/:communityId/:username", function(req, res) {

    var details = {
        username : req.params.username,
        communityId: req.params.communityId,
        type: req.params.communityType
    }

    userController.addCommunity(details, function(err, data) {  
        res.json(data);
    });  
});


//Removes a community from the User's list of communities
router.patch("/api/user/remove/:communityType/:communityId/:username", function(req, res) {

    var details = {
        username : req.params.username,
        communityId: req.params.communityId,
        type: req.params.communityType
    }

    userController.removeCommunity(details, function(err, data) {  
        res.json(data);
    });  
});

// Add to activeUsers array of the Community data
router.patch("/api/community/user/add/:id/:userId", function (req, res) {
    communityController.addActiveUser(req.params.id, req.params.userId, function (err, data) {
        if (err) {
            res.json(err)
        }
        res.json(data);
    });
})

// Remove from activeUsers array of the community data
router.patch("/api/community/user/remove/:id/:userId", function (req, res) {
    communityController.removeActiveUser(req.params.id, req.params.userId, function (err, data) {
        if (err) {
            console.log(err);
            res.json(err);
        }
        res.json(data);
    });
});

// Add to bannedList array of the Community data
router.patch("/api/community/user/ban/:id/:userId", function (req, res) {
    communityController.addBannedUser(req.params.id, req.params.userId, function (err, data) {
        if (err) {
            res.json(err)
        }
        res.json(data);
    });
});

// Remove from bannedList array of the community data
router.patch("/api/community/user/unban/:id/:userId", function (req, res) {
    communityController.removeBannedUser(req.params.id, req.params.userId, function (err, data) {
        if (err) {
            console.log(err);
            res.json(err);
        }
        res.json(data);
    });
});


module.exports = router;

