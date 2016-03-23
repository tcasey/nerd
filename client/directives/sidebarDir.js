angular.module('nerd')
  .directive('tcSide', function() {
    return {
      restrict: 'E',
      templateUrl: 'views/sidebarDir.html',
      scope: {
        info: '=',
        text: "@",
        whatever: "@"
      }
    };
  });
