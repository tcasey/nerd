angular.module('nerd', ['ui.router'])
.config(function($urlRouterProvider, $stateProvider){

  $urlRouterProvider
    .otherwise('login');

  $stateProvider

  .state('login',{
                  url: '/login',
                  templateUrl: './client/views/login.html'
  })
  .state('home', {
                  url: '/home',
                  templateUrl: './client/views/ledger.html'
  })
  .state('profile',{
                  url: '/profile',
                  templateUrl: './client/views/profile.html'
  })
});
