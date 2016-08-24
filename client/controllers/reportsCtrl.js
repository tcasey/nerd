angular.module('nerd')
.controller("reportsCtrl", ["$scope", function($scope) {
  // logging out!!
  $scope.logoutUser = function() {
    console.log('sucessful logout');
    loginService.logoutUser();
  };
}]);
