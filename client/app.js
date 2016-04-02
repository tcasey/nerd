angular.module('nerd', ['ui.router'])

.filter('sumOfValue', function () {
  return function (data, key) {

      if (angular.isUndefined(data) && angular.isUndefined(key))
          return 0;
      var sum = 0;

      angular.forEach(data,function(v,k){
          sum = sum + parseInt(v[key]);
      });
      return sum;
  };
})
// .filter('totalSumPriceQty', function () {
//     return function (data, key1, key2) {
//         if (angular.isUndefined(data) && angular.isUndefined(key1)  && angular.isUndefined(key2))
//             return 0;
//
//         var sum = 0;
//         angular.forEach(data,function(v,k){
//             sum = sum + (parseInt(v[key1]) * parseInt(v[key2]));
//         });
//         return sum;
//     };
// })

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
  .state('products', {
                  url: '/products',
                  templateUrl: './views/products.html'
  })
  .state('profile',{
                  url: '/profile',
                  templateUrl: './views/profile.html'
  });
});
