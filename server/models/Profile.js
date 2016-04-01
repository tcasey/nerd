var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bcrypt = require('bcryptjs');
var salt = bcrypt.genSaltSync(10);


var profileSchema = new Schema({

  username: { type: String, unique: true, required: true},

  email: { type: String, unique: false, lowercase: true, required: false},

  password: { type: String, unique: false, required: true},

  product: [{
    type: Schema.Types.ObjectId,
    ref: 'Product',
    required: false
  }],

  account: [{
    type: Schema.Types.ObjectId,
    ref: 'Account',
    required: false
  }]

});


profileSchema.methods.generateHash = function(password) {
  return bcrypt.hashSync(password, salt);
};

profileSchema.methods.validatePassword = function(password) {
  return bcrypt.compareSync(password, this.password);
};

module.exports = mongoose.model('Profile', profileSchema);
