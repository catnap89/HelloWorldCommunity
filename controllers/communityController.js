

//Bring in the Community and User mongoose models;
var Community = require("../models/Community");
    
module.exports = {
  
    save: function(data, callback) {
        // var newCommunity = {
        //     communityName: data.communityName,
        //     userAdmin: data.userAdmin,
        //     communityDesc: data.communityDesc,
        //     bannedList: data.bannedList
        // };
        console.log("!!!!!controllerCommunity");
        console.log(data);

        Community.create(data, function (err, doc) {
            if (err) {
                console.log(err);
            }

            else {
                console.log(doc);
                callback(doc);
            }
        });
    },

    delete: function(query, callback) {
        Community.remove(query, callback);
    },


    get: function(query, callback) {
        Community.find(query)
        .populate("userAdmin")
        .populate("activeUsers")
        .populate("bannedList")
        .sort({
            _id: -1
        }).exec(function(err, doc) {
            callback(doc);
        });
    },

    update: function(communityId, query, callback) {
        Community.update({_id: communityId}, {$set: query}, {}, callback);
    },

    addActiveUser: function(communityId, userId) {
        // console.log("got to addActiveUser")
        // console.log(userId);
        // console.log("controller communityId:")
        // console.log(communityId);
        // console.log("controller userId:")
        // console.log(userId);
        return Community.findOneAndUpdate({_id: communityId}, {$addToSet: {activeUsers: userId}}, {new: true})
        .populate("activeUsers");
    },

    removeActiveUser: function(communityId, userId) {
        // console.log("got to removeActiveUser")
        // console.log(userId);
        // console.log("controller communityId:")
        // console.log(communityId);
        // console.log("controller userId:")
        // console.log(userId);
        return Community.findOneAndUpdate({_id: communityId}, {$pull: {activeUsers: userId}}, {new: true})
        .populate("activeUsers")
    },

    addBannedUser: function(communityId, userId, callback) {
        console.log("got to addBannedUser")
        console.log("controller communityId:")
        console.log(communityId);
        console.log("controller userId:")
        console.log(userId);

        Community.findOneAndUpdate({_id: communityId}, {$addToSet: {bannedList: userId}}, {new: true}, callback)
            .populate("bannedList");
    },

    removeBannedUser: function(communityId, userId, callback) {

        Community.findOneAndUpdate({_id: communityId}, {$pull: {bannedList: userId}}, {new: true}, callback)
            .populate("bannedList")
    },
}

    
