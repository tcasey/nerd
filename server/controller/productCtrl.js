var mongoose = require('mongoose'),
    ObjectId = mongoose.Schema.ObjectId,
    Product = require('../models/Products');


module.exports = {

  create: function(req, res, next) {
    // console.log('creating product');
    var newProduct = new Product(req.body);
    newProduct.save(function(err, s) {
      if (err) {
        console.log(err);
        res.status(500).send();
      } else {
        res.status(200).json(s);
      }
    });
  },

  index: function(req, res, next) {
    Product.find(function(err, s) {
      if (err) {
        res.status(500).send();
      } else {
        res.status(200).json(s);
      }
    });
  },

  show: function(req, res, next) {
    // console.log(req.params);
    Product.findById(req.params.id, function(err, s) {
      if (err) {
        console.log(err);
        res.status(500).send();
      } else {
        res.status(200).send(s);
      }
    });
  },

  update: function(req, res, next) {
    Product.update({_id: req.params.id}, req.body, function(err, s) {
      if (err) {
        res.status(200).send(err);
      } else {
        res.status(200).send(s);
      }
    });
  },

  delete: function(req, res, next) {
    Product.remove({_id: req.params.id}, function(err, s) {
      if (err) {
        console.log(err);
        res.status(500).send();
      } else {
        res.status(200).send(s);
      }
    });
  }
};
