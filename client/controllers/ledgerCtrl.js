angular.module('nerd')
  .controller('ledgerCtrl', function($scope, ledgerService) {

    //  Gets transactions on page load
    ledgerService.getTransactions().then(function(res) {
      $scope.trans = res;
    });
    // Geting transactions with a ng-click event
    $scope.getTransactions = function() {
      ledgerService.getTransactions().then(function(res) {
        $scope.trans = res;
      });
    };
    // Creates transactions in the server
    $scope.postTransactions = function() {
      ledgerService.postTransactions($scope.transaction).then(function(req) {
        // this.add = function(transaction) {
        //   this.postTransactions.push(transaction);
        // };
      });
    };
    $scope.deleteTransactions = function() {
      ledger.Service.deleteTransactions($scope.transaction).then(function(req) {

      });
    };
  });
