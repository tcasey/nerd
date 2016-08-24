var mongoose = require('mongoose'),
  ObjectId = mongoose.Schema.ObjectId,
  Profile = require('../models/Profile');


module.exports = {

  create: function(req, res, next) {
    var newProfile = new Profile(req.body);
    newProfile.save(function(err, s) {
      if (err) res.status(500).send();
      else res.status(200).json(s);
    });
  },

  index: function(req, res, next) {
    Profile.find().populate('account', 'name').populate('product', 'name').exec(function(err, s) {
      if (err) {
        res.status(500).send();
      } else {
        res.status(200).json(s);
      }
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
    Profile.findById(req.user, function(err, user) {
      if (err) {
        res.status(500).send(err);
      } else {
        user.product.push(req.body.products);
        user.save(function(err, resp) {
          if (err) {
            res.status(500).send(err);
          } else {
            res.send(resp);
          }
        });
      }
    });
  },

  updateAct: function(req, res, next) {
    Profile.findById(req.user, function(err, user) {
      console.log('user from profileCtrl', user);
      if (err) {
        res.status(500).send(err);
      } else {
        user.account.push(req.body.accounts);
        user.save(function(err, resp) {
          if (err) {
            res.status(500).send(err);
          } else {
            res.send(resp);
          }
        });
      }
    });
  },


  // b stuff for auth
  loggedIn: function(req, res, next) {
    console.log('logged in???', req.user);
    if (req.user) {
      next();
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
  loggedOut: function(req, res, next) {
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
