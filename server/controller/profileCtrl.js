var mongoose = require('mongoose'),
  ObjectId = mongoose.Schema.ObjectId,
  Profile = require('../models/Profile');


module.exports = {

  create: function(req, res, next) {
    var newProfile = new Profile(req.body);
    newProfile.save(function(err, s) {
      console.log(s, 's in profileCtrl');
      if (err) res.status(500).send();
      else res.status(200).json(s);
    });
  },

  index: function(req, res, next) {
    var user = new Profile(req.body);
    user.save(function(err, response) {
      if (err) res.status(500).json(err);
      else return res.status(200).json(response);
    });
  },

  show: function(req, res, next) {
    Profile.findById(req.params.id, function(err, s) {
      // console.log(req.params.id);
      if (err) res.status(500).send();
      else res.status(200).send(s);
    });
  },

  update: function(req, res, next) {
    Profile.findByIdAndUpdate(req.query.id, req.body, {
      new: true
    }, function(err, response) {
      return err ? res.status(500).json(err) : res.status(200).json(response);
    });
  },


  // b stuff for auth
  loggedIn: function(req, res, next) {
    if (req.user) {
      next();
      console.log(req.user, 'profileCtrl if logged in');
    } else res.send({
      redirect: '/login'
    });
  },
  currentUser: function(req, res, next) {
    if (req.user) {
      res.status(200).send(req.user);
      console.log(req.user, 'profileCtrl current user');
    }
  },
  loggedOut: function(req, res, next){
    req.logout();
    req.session.destroy();
    console.log('user logged out!');
    res.redirect('/');
  },
  delete: function(req, res, next) {
    Profile.remove({
      _id: req.params.id
    }, function(err, s) {
      if (err) {
        console.log(err);
        res.status(500).send();
      } else {
        res.status(200).send(s);
      }
    });
  }
};
