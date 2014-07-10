var BillsController = function($scope, billsService) {
  billsService.getAllBills().then(function(data) {
    $scope.bills = data.bills;
    $scope.other = angular.copy(data.bills);
  });
};

module.exports = BillsController;