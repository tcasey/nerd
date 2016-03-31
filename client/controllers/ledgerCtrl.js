angular.module('nerd')
  .controller('ledgerCtrl', function($scope, ledgerService, loginService) {
    //  Gets accounts on page load for ng-options
    ledgerService.getAccounts().then(function(res) {
      $scope.accounts = res.account;
      console.log("scope accounts", $scope.accounts);
    });
    //  Gets products on page load for ng-options
    ledgerService.getProducts().then(function(res) {
      $scope.products = res.product[0];
      console.log($scope.products, 'ledgerCtrl prodtcts populare');
    });
    //  Gets transactions on page load
    ledgerService.getTransactions().then(function(res) {
      $scope.trans = res;
    });
    // Geting transactions with a ng-click event
    $scope.getTransactions = function() {
      ledgerService.getTransactions().then(function(res) {
        $scope.trans = res;
        console.log(res);
      });
    };
    // put    a ng-click event
    $scope.putAccount = function(profileId, obj1, obj2, obj3) {
      ledgerService.putAccount(profileId, obj1, obj2, obj3).then(function(res) {
        $scope.trans = res;
        console.log(res);
      });
    };

    // Appending input-transactions in ledger
    // $scope.add = function(transaction) {
    //   $scope.items.push(transaction);
    // };
    // Creates transactions in the server
    $scope.postTransactions = function() {
      ledgerService.postTransactions($scope.transaction).then(function(req) {
        this.add = function(transaction) {
          this.postTransactions.push(transaction);
        };
      });
    };

    // Delete transaction by ID
    $scope.deleteTransactions = function() {
      ledgerService.deleteTransactions($scope.transaction).then(function(req) {

      });
    };
    // logging out!!
    $scope.logoutUser = function() {
      console.log('sucessful logout');
      loginService.logoutUser();
    };
// search bar animation

    $(function() {
      $("#button").click(function() {
        $("#button").addClass("onclic", 250, validate);
      });

      function validate() {
        setTimeout(function() {
          $("#button").removeClass("onclic");
          $("#button").addClass("validate", 450, callback);
        }, 1250);
      }

      function callback() {
        setTimeout(function() {
          $("#button").removeClass("validate");
        }, 1250);
      }
    });
// add product modal

        $('.front input[type=submit]').click(function(e) {
            e.preventDefault();
            $('.card-holder').addClass('back-flip');
        })

        $('.back input[type=submit]').click(function(e) {
            e.preventDefault();
            $('.card-holder').removeClass('back-flip');
            $('.card-holder').addClass('slide');
            $('.success').addClass('success--confirm');
            setTimeout(function() {
                $('form').find("input[type=text], input[type=number]").val("");
                $('.card-holder').removeClass('slide');
                $('.success').removeClass('success--confirm');
            }, 1500);
        })



  });
