angular.module('nerd')
  .controller('loginCtrl', function($scope, loginService, mainService, ledgerService) {

    // $scope.currentUser = function() {
    //   mainService.currentUser().then(function(response){
    //     console.log('ctrl user', response);
    //     var currentUser = response._id;
    //     ledgerService.getUserId(currentUser);
    //   });
    // };

    //make a new user
    $scope.createUser = function(newUser) {
        loginService.newUser(newUser);
    };

    $scope.userLogin = function(user) {
      console.log('userLogin', user);
      loginService.userLogin(user);
    };

  });

/* ----------------------------------------------------------
Click on login and Sign Up to  change and view the effect
-------------------------------------------------------------*/

function change_login() {
  document.querySelector('.cont_forms').className = "cont_forms cont_forms_active_login";
  document.querySelector('.cont_form_login').style.display = "block";
  document.querySelector('.cont_form_sign_up').style.opacity = "0";

  setTimeout(function() {
    document.querySelector('.cont_form_login').style.opacity = "1";
  }, 400);

  setTimeout(function() {
    document.querySelector('.cont_form_sign_up').style.display = "none";
  }, 200);
}

function change_sign_up(at) {
  document.querySelector('.cont_forms').className = "cont_forms cont_forms_active_sign_up";
  document.querySelector('.cont_form_sign_up').style.display = "block";
  document.querySelector('.cont_form_login').style.opacity = "0";

  setTimeout(function() {
    document.querySelector('.cont_form_sign_up').style.opacity = "1";
  }, 100);

  setTimeout(function() {
    document.querySelector('.cont_form_login').style.display = "none";
  }, 400);

}

function hide_login_sign_up() {

  document.querySelector('.cont_forms').className = "cont_forms";
  document.querySelector('.cont_form_sign_up').style.opacity = "0";
  document.querySelector('.cont_form_login').style.opacity = "0";

  setTimeout(function() {
    document.querySelector('.cont_form_sign_up').style.display = "none";
    document.querySelector('.cont_form_login').style.display = "none";
  }, 500);

}
