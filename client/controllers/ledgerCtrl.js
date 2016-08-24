angular.module('nerd')
  .controller('ledgerCtrl', function($scope, ledgerService, loginService, mainService, productService) {

    //  Gets updated userACCOUNTS on click
    $scope.getProfileAccounts = function(res) {
      ledgerService.getProfileAccounts().then(function(res) {
        $scope.accounts = res;
      });
    };
    //  Gets ACCOUNTS    on page load for ng-options
    ledgerService.getAccounts().then(function(res) {
      $scope.accounts = res;
    });
    //  Gets PRODUCTS    on page load for ng-options
    ledgerService.getProducts().then(function(res) {
      $scope.products = res;
    });
    // Creates account in the server
    $scope.postAccount = function(name) {
      ledgerService.postAccount(name).then(function() {});
    };
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
    $scope.IsVisible = false;
    $scope.ShowHide = function() {
        //If DIV is visible it will be hidden and vice versa.
        $scope.IsVisible = $scope.IsVisible ? false : true;
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
    $scope.deleteTransaction = function(transactionId) {
      ledgerService.deleteTransaction(transactionId).then(function() {});
    };
    // logging out!!
    $scope.logoutUser = function() {
      console.log('sucessful logout');
      loginService.logoutUser();
    };
    // search bar animation

    var searchField = $('.search');
    var searchInput = $("input[type='search']");

    var checkSearch = function() {
      var contents = searchInput.val();
      if (contents.length !== 0) {
        searchField.addClass('full');
      } else {
        searchField.removeClass('full');
      }
    };

    $("input[type='search']").focus(function() {
      searchField.addClass('isActive');
    }).blur(function() {
      searchField.removeClass('isActive');
      checkSearch();
    });

    // $(function() {
    //   $("#button").click(function() {
    //     $("#button").addClass("onclic", 250, validate);
    //   });
    //
    //   function validate() {
    //     setTimeout(function() {
    //       $("#button").removeClass("onclic");
    //       $("#button").addClass("validate", 450, callback);
    //     }, 1250);
    //   }
    //
    //   function callback() {
    //     setTimeout(function() {
    //       $("#button").removeClass("validate");
    //     }, 1250);
    //   }
    // });


    //   // Get LOGGEDINUSER
    //   $scope.getLoggedInUser = function() {
    //   loginService.getLoggedInUser().then(function(res) {
    //     $scope.profile = res;
    //   });
    // };

    // Grabbing the user ID
    // $scope.currentUser = function() {
    //   ledgerService.currentUser().then(function(response){
    //     console.log(response._id);
    //     $scope.currentUser = response._id;
    //   });
    // };


  });
