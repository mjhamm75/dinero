require('angular/angular');
require('angular-route/angular-route');
require('./bills/bills.module.js');

var billsTemplate = require('./bills/bills.html');

console.log(billsTemplate);

var app = angular.module('dinero', ['bills', 'ngRoute']);

app.config(['$httpProvider', function($httpProvider) {
  $httpProvider.defaults.useXDomain = true;
  delete $httpProvider.defaults.headers.common['X-Requested-With'];
}]);

app.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/bills', {
      template: billsTemplate
    });
}]);

app.controller('bills', function($scope, billsService) {
  billsService.getAllBills();
});