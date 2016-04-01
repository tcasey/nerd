var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var accountSchema = new Schema({
name: {
  type: String,
  unique: true,
  required: true,
}
});

module.exports = mongoose.model('Account', accountSchema);
