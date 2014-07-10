var DndController = function($scope) {
    $scope.$watch("bills", function(value) {
        if(value !== undefined) {
            console.log("Model: " + value.map(function(e) {
              return e.id;
            }).join(','));
        }
    },true);
};

module.exports = DndController;
