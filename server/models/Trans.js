var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var transSchema = new Schema({
account: {
  type: Schema.Types.ObjectId,
  ref: 'Account',
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

   product: {
     type: Schema.Types.ObjectId,
     ref: 'Product',
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
