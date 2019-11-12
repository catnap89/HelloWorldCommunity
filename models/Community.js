
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

var communitySchema =  new Schema({
    
  
  communityName : {
    type: String,
    required: true
  },

  communityDesc : {
    type: String,
    required: true
  },

  userAdmin: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true
  },

  bannedList: [{
        type: Schema.Types.ObjectId,
        ref: "User"
        // I don't think this should be required
        // required: true
    }],

  activeUsers: [{
      type: Schema.Types.ObjectId,
      ref: "User"
  }]
});


var Community = mongoose.model("Community", communitySchema);

module.exports = Community;