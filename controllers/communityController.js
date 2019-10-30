

//Bring in the Community and User mongoose models;
var Community = require("../models/Community");
    
module.exports = {
  
    save: function(data, callback) {
        var newCommunity = {
            communityName: data.communityName,
            userAdmin: data.userAdmin,
            bannedList: data.bannedList
        };

        Community.create(newCommunity, function (err, doc) {
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
        Community.find(query).sort({
            _id: -1
        }).exec(function(err, doc) {
            callback(doc);
        });
    },


    update: function(query, callback) {
        Community.update({_id: query._id}, {$set:query}, {}, callback);
        }

    }
    
