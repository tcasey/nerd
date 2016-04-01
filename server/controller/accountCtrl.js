var mongoose = require('mongoose'),
    ObjectId = mongoose.Schema.ObjectId,
    Account = require('../models/Accounts');


module.exports = {

  create: function(req, res, next) {
    var newAccount = new Account(req.body);
    newAccount.save(function(err, s) {
      if (err) {
        console.log(err);
        res.status(500).send();
      } else {
        res.status(200).json(s);
      }
    });
  },

  index: function(req, res, next) {
    Account.find().populate('account', 'name').populate('product', 'name').exec(function(err, s) {
      if (err) {
        res.status(500).send();
      } else {
        res.status(200).json(s);
      }
    });
  },

  show: function(req, res, next) {
    Account.findById(req.params.id, function(err, s) {
      if (err) {
        console.log(err);
        res.status(500).send();
      } else {
        res.status(200).send(s);
      }
    });
  },

  update: function(req, res, next) {
    Account.update({_id: req.params.id}, req.body, function(err, s) {
      if (err) {
        res.status(200).send(err);
      } else {
        res.status(200).send(s);
      }
    });
  },

  delete: function(req, res, next) {
    Account.remove({_id: req.params.id}, function(err, s) {
      if (err) {
        console.log(err);
        res.status(500).send();
      } else {
        res.status(200).send(s);
      }
    });
  }
};
