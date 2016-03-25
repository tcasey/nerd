angular.module('nerd')
  .controller('mainCtrl', function($scope, ledgerService){

    //  Gets accounts on page load for ng-options
    ledgerService.getAccounts().then(function(res) {
      $scope.accounts = res;
      console.log($scope.accounts);
    });

    ledgerService.getProducts().then(function(res) {
      $scope.accounts = res;
      console.log($scope.accounts);
    });

  });
