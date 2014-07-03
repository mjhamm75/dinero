var Bookshelf = require('bookshelf').PG;

var Bill = Bookshelf.Model.extend({
  tableName: 'bills'
});

var Bills = Bookshelf.Collection.extend({
  model: Bill
});

exports.createBill = function(req, res) {
  'use strict';

  var bill = new Bill({
    "name": req.body.name,
    "description": req.body.description,
    "due_date": req.body.dueDate,
    "payment": req.body.payment,
    "total": req.body.total
  });

  bill.save().then(function(data) {
    res.json(data.toJSON());
  });
};

exports.deleteBill = function(req, res) {
  'use strict';
  var bill = new Bill();
  bill.set('id', req.params.id);
  bill.destroy().then(function(data) {
   res.json({
    'id': req.params.id
   });
  });
};

exports.getAllBills = function(req, res) {
  'use strict';
  var bills = new Bills();
  bills.fetch().then(function(data) {
    res.json(data.toJSON());
  });
};

exports.getBill = function(req, res) {
  'use strict';
  var bill = new Bill({
    id: req.params.id
  });
  bill.fetch().then(function(data) {
    res.json(data.toJSON());
  });
};