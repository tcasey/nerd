var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

  mongoose.Schema({
      name: { type: String, required: true, unique: true}
  });

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
// need to get this account in the product schema
   account: {
     type: String,
     required: true,
   }
});

module.exports = mongoose.model('Profile', profileSchema);
