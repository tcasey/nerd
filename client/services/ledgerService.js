angular.module('nerd')
.service('ledgerService', function($q, $http) {


this.getTransactions = function() {
  return $http({
    method: 'GET',
    url: '/transactions'
  }).then(function(res) {
    return res.data;
  });
};

this.postTrans = function(trans) {
  $http.post('/transactions');
};

});
