angular.module('nerd')
  .service('ledgerService', function($q, $http) {

    //getting the account data for the ng-options
    this.getAccounts = function() {
      return $http({
        method: 'GET',
        url: '/user/current'
      }).then(function(res) {
        console.log(res.data, 'current user logged in ');
        return res.data;
      });
    };
    //getting the products data for the ng-options
    this.getProducts = function() {
      return $http({
        method: 'GET',
        url: '/user/current'
      }).then(function(res) {
        console.log(res.data, 'this should have the products for ng-options');
        return res.data;
      });
    };

    //getting the transactions data
    this.getTransactions = function() {
      return $http({
        method: 'GET',
        url: '/transactions'
      }).then(function(res) {
        console.log(res.data, 'ledgerservice get');
        return res.data;
      });
    };
    // posting the transactions data
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
  console.log(res.data, 'posted transaction body');
        return res.data;
      });
    };


    // Creating transactions through the input field
    this.putAccount = function(profileId, obj1, obj2, obj3) {
      return $http({
        data: {account: [
          {account: obj1},
          {account: obj2},
          {account: obj3}
        ]},
        method: 'PUT',
        url: '/profile' + getAccounts
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
