var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

  mongoose.Schema({
      name: { type: String, required: true, unique: true}
  });

var transSchema = new Schema({
  // referenced from my profile schema
account: [{
  type: mongoose.Schema.Types.ObjectId,
  ref: 'Profile'
}],

  date: {
    type: Date,
    default: new Date()
  },

   customer: {
     type: String,
     unique: false,
     required: true,
   },

   p_name: [{
     type: mongoose.Schema.Types.ObjectId,
     ref: 'Product'
   }],

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
