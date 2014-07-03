var BillsController = function($scope, billsService) {
  billsService.getAllBills().then(function(data) {
    $scope.bills = data.bills;
  });
};

module.exports = BillsController;