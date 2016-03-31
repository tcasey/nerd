angular.module("nerd").service('loginService', function($q, $http, $state) {

  var baseUrl = 'http://localhost:5000/';

  // login/signup for users
  this.userLogin = function(user) {
    return $http({
      method: 'POST',
      data: user,
      url: '/login'
    }).success(function() {
      $state.go('home');
    });
  };

  this.logoutUser = function() {
    return $http({
      method: 'GET',
      url: '/logout'
    }).success(function() {
       $state.go('login');
    });
  };

  this.newUser = function(newUser) {
    return $http({
      method: 'POST',
      data: newUser,
      url: '/signup'
    }).success(function() {
      // $state.go('home');
    });
  };

  this.getProfile = function() {
    return $http({
      method: 'GET',
      url: '/user/current'
    });
  };

});
