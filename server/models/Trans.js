var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var transSchema = new Schema({
account: {
  type: mongoose.Schema.Types.ObjectId,
  ref: 'Profile',
  required: true
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
     ref: 'Product',
     required: true
   },

   outflow: {
     type: Number,
     unique: false,
     required: true,
   },

   inflow: {
     type: Number,
     unique: false,
     required: true,
   }
});

module.exports = mongoose.model('Trans', transSchema);
