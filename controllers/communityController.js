

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
        .sort({
            _id: -1
        }).exec(function(err, doc) {
            callback(doc);
        });
    },


    update: function(query, callback) {
        Community.update({communityName: query.communityName}, {$set:query}, {}, callback);
        }

    }
    
