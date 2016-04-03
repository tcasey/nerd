angular.module('nerd')
  .directive('tcSide', function() {
    return {
      restrict: 'E',
      templateUrl: 'views/sidebarDir.html',
      // scope: { account: name }
    };
  });
