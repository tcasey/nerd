var mongoose = require('mongoose'),
    ObjectId = mongoose.Schema.ObjectId,
    Trans = require('../models/Trans');


module.exports = {

  create: function(req, res, next) {
    console.log("some hopefully good stuff", req.body);
    var newTrans = new Trans(req.body);
    newTrans.save(function(err, s) {
      if (err) {
        console.log(err);
        res.status(500).send();
      } else {
        res.status(200).json(s);
      }
    });
  },

  index: function(req, res, next) {
    Trans.find().populate('account').populate('product').exec(function(err, s) {
      if (err) {
        res.status(500).send();
      } else {
        res.status(200).json(s);
      }
    });
  },

  show: function(req, res, next) {
    Trans.findById(req.params.id, function(err, s) {
      if (err) {
        console.log(err);
        res.status(500).send();
      } else {
        res.status(200).send(s);
      }
    });
  },

  update: function(req, res, next) {
    Trans.update({_id: req.params.id}, req.body, function(err, s) {
      if (err) {
        res.status(200).send(err);
      } else {
        res.status(200).send(s);
      }
    });
  },

  delete: function(req, res, next) {
    Trans.remove({_id: req.params.id}, function(err, s) {
      if (err) {
        console.log(err);
        res.status(500).send();
      } else {
        res.status(200).send(s);
      }
    });
  }
};
