var mongoose = require('mongoose');
var Schema   = mongoose.Schema;


var profileSchema = new Schema({
username: {
  type: String,
  unique: true,
  required: true,
},

email: {
  type: String,
  unique: true,
  lowercase: true,
  required: true,
},

  password : {
    type: String,
    unique: true,
    required: true
  },

   account: {
     type: String,
     required: true,
   }
});

module.exports = mongoose.model('Profile', profileSchema);
