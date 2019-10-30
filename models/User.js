
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

var userSchema = new Schema({
    
    firstName : {
        type: String,
        required: true
    }, 

    lastName : {
        type: String,
        required: true
    },

    userName : {
        type: String,
        required: true,
        unqiue: true
    },

    password : {
        type: String,
        required: true,
        unique: true
    },

    joinedCommunityIDs : {
        type: Array,
        required: true
    },

    ownedCommunityIDs : {
        type: Array,
        required: true
    },

    bannedCommunityIDs : {
        type: Array,
        required: true
    },

    isAdmin : {
       type: Boolean,
       required: true
    },

    favoriteCommunityIDs : {
        type: Array,
        required: true
    }

});

var User = mongoose.model("User", userSchema);

module.exports = User;