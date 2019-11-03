

var User = require("../models/User");


module.exports = {
    get: function(query, callback) {
        User.find(query).sort({
            _id: -1
        }).exec(function(err, doc) {
            callback(doc);
        });
        },

    save: function(data, callback) {
            var newUser = {
                firstName : data.firstName,  
                lastName : data.lastName,
                userName : data.userName,
                password : data.password,
                joinedCommunityIDs : data.joinedCommunityIDs,
                ownedCommunityIDs : data.ownedCommunityIDs,
                bannedCommunityIDs : data.bannedCommunityIDs,
                isAdmin : data.isAdmin,
                favoriteCommunityIDs : data.favoriteCommunityIDs,
                friends : data.friends,
                email : data.email
            };

            User.create(newUser, function (err, doc) {
                if (err) {
                    console.log(err);
                }

                else {
                    console.log(doc);
                    callback(doc);
                }
            });
        },

    delete: function(data, callback) {
            User.remove({userName: data.userName}, callback);
        },
    
        
    update: function(query, callback) {
            User.update({username: query.username}, {$set:query}, {}, callback);
            }
        
    };

    
