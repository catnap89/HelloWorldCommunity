

var User = require("../models/User");


module.exports = {
    get: function(data, callback) {
        User.find({username: data.username}, callback);
        },

    save: function(data, callback) {
            var newUser = {
                firstName : data.firstName,  
                lastName : data.lastName,
                userName : data.username,
                password : data.password,
                joinedCommunityIDs : data.joinedCommunityIDs,
                ownedCommunityIDs : data.ownedCommunityIDs,
                bannedCommunityIDs : data.bannedCommunityIDs,
                isAdmin : data.isAdmin,
                favoriteCommunityIDs : data.favoriteCommunityIDs
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
            Community.update({userName: userName}, {$set:query}, {}, callback);
            }
        
    };

    
