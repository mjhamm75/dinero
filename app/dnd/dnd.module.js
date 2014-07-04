var DndDirective = require('./dnd.directive.js');
var DndController = require('./dnd.controller.js');

var app = angular.module('dnd', []);
app.directive('dndList', DndDirective);
app.controller('dndController', DndController);