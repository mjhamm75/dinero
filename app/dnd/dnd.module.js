var DndDirective = require('./dnd.directive.single.js');
var DndListsDirective = require('./dnd.directive.multiple.js');
var DndController = require('./dnd.controller.js');

var app = angular.module('dnd', []);
app.directive('dndList', DndDirective);
app.directive('dndLists', DndListsDirective);
app.controller('dndController', DndController);