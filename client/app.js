angular.module('nerd', ['ui.router', 'ngMaterial'])
.config(function($urlRouterProvider, $stateProvider){

  $urlRouterProvider
    .otherwise('login');

  $stateProvider

  .state('login',{
                  url: '/login',
                  templateUrl: './views/login.html'
  })
  .state('home', {
                  url: '/home',
                  templateUrl: './views/ledger.html'
  })
  .state('reports', {
                  url: '/reports',
                  templateUrl: './views/reports.html'
  })
  .state('profile',{
                  url: '/profile',
                  templateUrl: './views/profile.html'
  });
});
