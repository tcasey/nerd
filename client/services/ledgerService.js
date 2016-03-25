angular.module('nerd')
  .service('ledgerService', function($q, $http) {

    //getting the account data for the ng-options
    this.getAccounts = function() {
      return $http({
        method: 'GET',
        url: '/profile'
      }).then(function(res) {
        console.log(res.data[0]);
        return res.data;
      });
    };
    //getting the products data for the ng-options
    this.getProducts = function() {
      return $http({
        method: 'GET',
        url: '/products'
      }).then(function(res) {
        console.log(res.data[0]);
        return res.data;
      });
    };

    //getting the transactions data
    this.getTransactions = function() {
      return $http({
        method: 'GET',
        url: '/transactions'
      }).then(function(res) {
        return res.data;
      });
    };
    //posting the transactions data
    this.postTrans = function(trans) {
      $http.post('/transactions');
    };
    // Creating transactions through the input field
    this.postTransactions = function(obj) {
      return $http({
        data: obj,
        method: 'POST',
        url: '/transactions'
      }).then(function(res) {
        return res.data;
      });
    };

    this.postTrans = function(input) {
      $http.post('/transactions', input);
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
