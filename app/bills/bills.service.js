var BillsService = function($resource, $q) {
  return {
    _getResource: $resource('http://localhost:9000/bills/:billId', {billsId: '@billsId'}, {}),
    getAllBills: function() {
      var deferred = $q.defer();
      this._getResource.get({}, function(data) {
        deferred.resolve(data);
      });
      return deferred.promise;
    }
  };
};

module.exports = BillsService;