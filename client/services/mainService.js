angular.module("nerd").service("mainService", function($http) {

  this.currentUser = function() {
    return $http({
      method: 'GET',
      url: '/user/current/'
    }).then(function(res) {
      console.log(res.data);
      return res.data;
    });
  };
});
