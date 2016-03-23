var mongoose = require('mongoose'),
    ObjectId = mongoose.Schema.ObjectId,
    Profile = require('../models/Profile');


module.exports = {

  create: function(req, res, next) {
    var newProfile = new Profile(req.body);
    newProfile.save(function(err, s) {
      if (err) {
        console.log(err);
        res.status(500).send();
      } else {
        res.status(200).json(s);
      }
    });
  },

  index: function(req, res, next) {
    console.log('hi');
    Profile.find(function(err, s) {
      if (err) {
        res.status(500).send();
      } else {
        console.log(s);
        res.status(200).json(s);
      }
    });
  },

  show: function(req, res, next) {
    console.log(req.params);
    Profile.findById(req.params.id, function(err, s) {
      if (err) {
        console.log(err);
        res.status(500).send();
      } else {
        res.status(200).send(s);
      }
    });
  },

  update: function(req, res, next) {
    Profile.update({_id: req.params.id}, req.body, function(err, s) {
      if (err) {
        res.status(200).send(err);
      } else {
        res.status(200).send(s);
      }
    });
  },

  delete: function(req, res, next) {
    Profile.remove({_id: req.params.id}, function(err, s) {
      if (err) {
        console.log(err);
        res.status(500).send();
      } else {
        res.status(200).send(s);
      }
    });
  }
};
