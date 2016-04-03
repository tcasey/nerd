angular.module('nerd')
  .controller('productCtrl', function($scope, loginService, mainService, ledgerService, productService) {

    $scope.getNewProducts = function() {
    productService.getProducts().then(function(res) {
      $scope.products = res;
    });
  };
    //get products on page load
    productService.getProducts().then(function(res) {
      $scope.products = res;
    });
    // // Creates accounts in the server
    // $scope.postAccount = function(createAccount) {
    //   productService.postAccount(createAccount).then(function() {});
    // };
    // Creates products in the server
    $scope.postProduct = function(name, description, price) {
      productService.postProduct(name, description, price).then(function() {
      });
    };
    // Delete products in the server
    $scope.deleteProduct = function(productId) {
      productService.deleteProduct(productId).then(function() {
      });
    };

    $scope.IsVisible = false;
           $scope.ShowHide = function () {
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
      setTimeout(function() {
      $('.card-holder').hide();
    }, 1600);

    });
    $scope.IsVisible = $scope.IsVisible ? false : true;
};

  });
