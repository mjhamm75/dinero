var DndController = function($scope) {
    $scope.$watch("bills", function(value) {
        if(value !== undefined) {
            console.log("Bills: " + value.map(function(e) {
              return e.id;
            }).join(','));
        }
    },true);

    $scope.$watch("other", function(value) {
        if(value !== undefined) {
            console.log("BillsOther: " + value.map(function(e) {
              return e.id;
            }).join(','));
        }
    },true);
};

module.exports = DndController;
