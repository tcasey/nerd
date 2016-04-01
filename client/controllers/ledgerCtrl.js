angular.module('nerd')
  .controller('ledgerCtrl', function($scope, ledgerService, loginService, mainService) {



    // $scope.currentUser = function() {
    //   ledgerService.currentUser().then(function(response){
    //     console.log(response._id);
    //     $scope.currentUser = response._id;
    //   });
    // };





    // Creates accounts in the server
    $scope.postAccount = function(createAccount) {
      ledgerService.postAccount(createAccount).then(function() {});
    };
    // Creates accounts in the server
    $scope.postProduct = function(name, description, price) {
      ledgerService.postProduct(name, description, price).then(function() {});
    };
    //  Gets ACCOUNTS    on page load for ng-options
    ledgerService.getAccounts().then(function(res) {
      $scope.accounts = res;
      console.log("scope accounts", $scope.accounts);
    });
    //  Gets PRODUCTS    on page load for ng-options
    ledgerService.getProducts().then(function(res) {
      $scope.products = res;
    });


    // UPDATE user profile ACCOUNTS
    $scope.updateProfileAct = function(account) {
    ledgerService.updateProfileAct(account).then(function() {

    });
  };
    // UPDATE user profile PRODUCTS
    $scope.updateProfilePro = function(product) {
    ledgerService.updateProfilePro(product).then(function() {

    });
  };
  // Get LOGGEDINUSER
  $scope.getLoggedInUser = function() {
  loginService.getLoggedInUser().then(function(res) {
    $scope.profile = res;
  });
};
    //  Gets transactions on page load
    ledgerService.getTransactions().then(function(res) {
      $scope.trans = res;
    });
    // Geting transactions with a ng-click event
    $scope.getTransactions = function() {
      ledgerService.getTransactions().then(function(res) {
        $scope.trans = res;
        console.log('getting trans ng-click', res);
      });
    };
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
