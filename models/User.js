
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var userSchema = new Schema({
    
    firstName : {
        type: String
    }, 

    lastName : {
        type: String
    },

    username : {
        type: String,
        required: true,
        unqiue: true
    },

    password : {
        type: String,
        required: true
        // Should not be unique since some people's password might be same
        // unique: true
    },

    email: {
        type: String,
        required: true,
        unique: true
    },

    joinedCommunityIDs : {
        type: Array,
        // I don't think this should be required
         required: true
    },

    ownedCommunityIDs : {
        type: Array,
        // I don't think this should be required.
         required: true
    },

    bannedCommunityIDs : {
        type: Array,
        // I don't think this should be required, user might never get banned from a Community
         required: true
    },

    isAdmin : {
       type: Boolean,
        // I don't think this should be required. A user might not make their own community
        required: true
    },

    favoriteCommunityIDs : {
        type: Array,
        // I don't think this should be required. I might be wrong tho
         required: true
    },

    friends : {
        type: Array,
        required: true
    },

    email : {
        type: String,
        required: true,
        unique: true
    }

});

var User = mongoose.model("User", userSchema);

module.exports = User;