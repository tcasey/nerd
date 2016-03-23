angular.module('nerd')
  .controller('ledgerCtrl', function($scope, ledgerService){

    // connect trans to the get endpoint in my server side & connect to the scope of THIS conroller

    ledgerService.getTransactions().then(function(res) {
      console.log(res);
      $scope.trans = res;
    });
  });
