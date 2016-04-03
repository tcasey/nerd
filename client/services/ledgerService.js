angular.module('nerd')
  .service('ledgerService', function($q, $http) {

// Creates Account and updates user profile
    this.postAccount = function(createAccount) {
      return $http({
        data: {name: createAccount},
        method: 'POST',
        url: '/accounts'
      }).success(function(res) {
        console.log('res from account post', res);
        return $http({
          method: 'PUT',
          url: '/profile/act',
          data: {accounts: res._id}
        }).success(function(res){
        });
      });
    };

    this.getProfileAccounts = function() {
      return $http({
        method: 'GET',
        url: '/accounts'
        // data: {account: name}
      }).then(function(res) {
        return res.data;
      });
    };
    //getting the account data for the ng-options
    this.getAccounts = function() {
      return $http({
        method: 'GET',
        url: '/accounts'
      }).then(function(res) {
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
        return res.data;
      });
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

    this.deleteTransaction = function(transactionId) {
      return $http({
        method: 'DELETE',
        url: '/transactions/' + transactionId
      }).then(function(res) {
          console.log('deletedTransaction', res);
      });
    };

    // this.getUserId = function(user) {
    //   console.log('user', user);
    //   var profileId = user;
    // };

  });
