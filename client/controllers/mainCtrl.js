angular.module('nerd')
  .controller('mainCtrl', function($scope, mainService) {

    // $scope.currentUser = function() {
    //   mainService.currentUser().then(function(response){
    //     console.log(response._id);
    //     $scope.currentUser = response._id;
    //   });
    // };
    //
    $scope.IsVisibleAct = false;
    $scope.ShowHideAct = function() {
        $scope.IsVisibleAct = $scope.IsVisibleAct ? false : true;
      }
    //  Gets updated userACCOUNTS on click
    $scope.getProfileAccounts = function(res) {
      mainService.getProfileAccounts().then(function(res) {
        $scope.accounts = res;
      });
    };
    // Creates account in the server
    $scope.postAccount = function(name) {
      mainService.postAccount(name).then(function() {});
    };

  });
