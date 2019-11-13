const mongoose = require("mongoose");
const Schema = mongoose.Schema;


var userSchema = new Schema({
    
    username : {
        type: String,
        required: true,
        unqiue: true
    },

    password : {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true,
        unique: true
    },

    date: {
        type: Date,
        default: Date.now
    },

    ownedCommunityIDs : [{
        type: Schema.Types.ObjectId,
        ref: "Community"

    }],

    bannedCommunityIDs : [{
        type: Schema.Types.ObjectId,
        ref: "Community"
    }],

    isAdmin : {
       type: Boolean
    },

    favoriteCommunityIDs : [{
        type: Schema.Types.ObjectId,
        ref: "Community"
    }],

    friends : {
        type: Array
        // required: true
    }
});

userSchema.methods.toJSON = function() {
    const obj = this.toObject();
    delete obj.password;
    return obj;
}


var User = mongoose.model("User", userSchema);


module.exports = User;