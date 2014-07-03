require('./config/bookshelf.js');
var bodyParser = require('body-parser');
var expressValidator = require('express-validator');
var bills = require('./routes/bills.js');
var users = require('./routes/users.js');

var express = require('express');
var port = process.env.PORT || 9000;

var app = express();

app.all('/*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header("Access-Control-Allow-Methods", "GET, POST","PUT");
  next();

});

app.use(express.bodyParser());
app.use(expressValidator());

app.get('/users', users.getAllUsers);
app.get('/users/:id', users.getUser);
app.post('/users', users.createUser);
app.delete('/users/:id', users.deleteUser);

app.get('/bills', bills.getAllBills);
app.get('/bills/:id', bills.getBill);
app.post('/bills', bills.createBill);
app.delete('/bills/:id', bills.deleteBill);

app.listen(port, function() {
  'use strict';
  console.log('Listening on:', port);
});
