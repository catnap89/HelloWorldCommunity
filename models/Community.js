
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
    type: String,
    required: true
  },

  bannedList: {
    type: Array
  }
});



var Community = mongoose.model("Community", communitySchema);

module.exports = Community;