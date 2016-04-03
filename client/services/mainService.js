angular.module("nerd").service("mainService", function($http) {

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
      
// Grabbing the user ID
      // this.currentUser = function() {
      //   return $http({
      //     method: 'GET',
      //     url: '/user/current/'
      //   }).then(function(res) {
      //     console.log(res.data);
      //     return res.data;
      //   });
      // };

});
