var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var transSchema = new Schema({
account: {
  type: mongoose.Schema.Types.ObjectId,
  ref: 'Profile',
  required: false
},

  date: {
    type: Date,
    default: new Date()
  },

   customer: {
     type: String,
     unique: false,
     required: true,
   },

   p_name: {
     type: mongoose.Schema.Types.ObjectId,
     ref: 'Profile',
     required: false
   },

   outflow: {
     type: Number,
     unique: false,
     required: false,
     default: 0
   },

   inflow: {
     type: Number,
     unique: false,
     required: false,
     default: 0
   }
});

module.exports = mongoose.model('Trans', transSchema);
