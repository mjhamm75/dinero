require('angular/angular');
require('angular-resource/angular-resource');

var BillsService = require('./bills.service.js');
var BillsController = require('./bills.controller.js');

var app = angular.module('bills', ['ngResource']);
app.factory('billsService', ['$resource', '$q', BillsService]);
app.controller('billsController', ['$scope', 'billsService', BillsController]);