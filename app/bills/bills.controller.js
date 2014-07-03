var BillsController = function($scope, billsService) {
  billsService.getAllBills();
};

module.exports = BillsController;