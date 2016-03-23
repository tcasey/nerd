var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

  mongoose.Schema({
      name: { type: String, required: true, unique: true}
  });

var productSchema = new Schema({
p_name: {
  type: String,
  unique: true,
  required: true,
  index: true
},

  description : {
    type: String,
    required: true
  },

   price: {
     type: Number,
     required: true,
     min: 0
   }
});

module.exports = mongoose.model('Product', productSchema);
