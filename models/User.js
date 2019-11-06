
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
        // Should not be unique since some people's password might be same
        // unique: true
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

    firstName : {
        type: String
    }, 

    lastName : {
        type: String
    },


    joinedCommunityIDs : {
        type: Array
        // I don't think this should be required
        // required: true
    },

    ownedCommunityIDs : [{
        type: Schema.Types.ObjectId,
        ref: "Community"
        // I don't think this should be required.
        // required: true
    }],

    bannedCommunityIDs : {
        type: Array
        // I don't think this should be required, user might never get banned from a Community
        // required: true
    },

    isAdmin : {
       type: Boolean
        // I don't think this should be required. A user might not make their own community
        // required: true
    },

    favoriteCommunityIDs : {
        type: Array
        // I don't think this should be required. I might be wrong tho
        // required: true
    },

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

// userSchema.methods.validatePassword = function(val) {
//     return bcrypt.compare(val, this.password);
// }


// userSchema.pre('save', function(next) {
//     if ( this.isNew ) {
//         this.password = bcrypt.hashSync(this.password, 10);
//     }
//     next();
// });

var User = mongoose.model("User", userSchema);


module.exports = User;