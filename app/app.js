require('angular/angular');
require('./bills/bills.module.js');

var app = angular.module('dinero', ['bills']);
app.config(['$httpProvider', function($httpProvider) {
  $httpProvider.defaults.useXDomain = true;
  delete $httpProvider.defaults.headers.common['X-Requested-With'];
}]);

app.controller('test', function($scope, billsService) {
  billsService.getAllBills();
});