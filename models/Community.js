
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

var communitySchema =  new Schema({
    
  
  communityName : {
      type: String,
      required: true
    },

    // identifier: {
    //     type: Number,
    //     required: true
    // },

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
});


var Community = mongoose.model("Community", communitySchema);

module.exports = Community;