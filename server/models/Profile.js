var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bcrypt = require('bcryptjs');
var salt = bcrypt.genSaltSync(10);


var profileSchema = new Schema({

  username: { type: String, unique: true, required: true,},

  email: { type: String, unique: false, lowercase: true, required: false,},

  password: { type: String, unique: false, required: true},

  product: [{
    product:{
    p_name: {type: String,unique: true,required: false,},
    description: {type: String,required: false},
    price: {type: Number,required: false,min: 0}
    }
  }],

  account: [{
    account: { type: String, required: false }
  }]
});


profileSchema.methods.generateHash = function(password) {
  return bcrypt.hashSync(password, salt);
};

profileSchema.methods.validatePassword = function(password) {
  return bcrypt.compareSync(password, this.password);
};

module.exports = mongoose.model('Profile', profileSchema);
