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
// Creating transactions through the input field
this.postTransactions = function(obj) {
  return $http({
    data: obj,
    method: 'POST',
    url: '/transactions'
  }).then(function(res) {
    return res.data;
  });
};

this.postTrans = function(input) {
  $http.post('/transactions', input);
};

this.deleteTransactions = function(obj) {
  return $http({
    data: obj,
    method: 'DELETE',
    url: '/transactions'
  }).then(function(res) {
    return res.data;
  });
};
//
// this.postTrans = function(input) {
//   $http.post('/transactions', input);
// };




});
