angular.module('nerd')
  .service('ledgerService', function($q, $http) {

    this.updateProfileAct = function(profileId, account) {
      return $http({
        data: {},
        method: 'PUT',
        url: '/profile/' + profileId
      }).then(function(res) {
        return res.data;
      });
    };

    this.updateProfilePro = function(profileId, product) {
      return $http({
        data: {},
        method: 'PUT',
        url: '/profile/' + profileId
      }).then(function(res) {
        return res.data;
      });
    };

    this.getUserId = function(user) {
      console.log('user', user);
      var profileId = user;
    };

    //getting the account data for the ng-options
    this.getAccounts = function() {
      return $http({
        method: 'GET',
        url: '/accounts'
      }).then(function(res) {
        // console.log( 'current user logged in ', res);
        return res.data;
      });
    };
    //getting the products data for the ng-options
    this.getProducts = function() {
      return $http({
        method: 'GET',
        url: '/products'
      }).then(function(res) {
        // console.log(res.data, 'this should have the products for ng-options');
        return res.data;
      });
    };

    //getting the transactions data
    this.getTransactions = function() {
      return $http({
        method: 'GET',
        url: '/transactions'
      }).then(function(res) {
        // console.log( 'ledgerservice get', res);
        return res.data;
      });
    };
    // posting the transactions data
    this.postTrans = function(trans) {
      $http.post('/transactions');
    };
    // Creating transactions through the input field
    this.postTransactions = function(obj) {
      // console.log("kljsdljksdfjklsaf", obj);
      return $http({
        data: obj,
        method: 'POST',
        url: '/transactions'
      }).then(function(res) {
  // console.log(res.data, 'posted transaction body');
        return res.data;
      });
    };


    // Creating through the input field
    this.putAccount = function() {
      return $http({
        data: {},
        method: 'PUT',
        url: '/profile'
      }).then(function(res) {
        return res.data;
      });
    };

    // Creating account through the input field
    this.postAccount = function(createAccount) {
      return $http({
        data: {name: createAccount},
        method: 'POST',
        url: '/accounts'
      }).then(function(res) {
        return res.data;
      });
    };
    // Creating product through the input field
    this.postProduct = function(name, description, price) {
      return $http({
        data: {name: name, description: description, price: price},
        method: 'POST',
        url: '/products'
      }).then(function(res) {
        return res.data;
      });
    };
    // this.deleteTransactions = function(obj) {
    //   return $http({
    //     data: obj,
    //     method: 'DELETE',
    //     url: '/transactions'
    //   }).then(function(res) {
    //     return res.data;
    //   });
    // };


  });
