var Bookshelf = require('bookshelf').PG;

var User = Bookshelf.Model.extend({
  tableName: 'users'
});

var Users = Bookshelf.Collection.extend({
  model: User
});

exports.createUser = function(req, res) {
  'use strict';

  var user = new User({
    "first_name": req.body.firstName,
    "last_name": req.body.lastName,
    "email": req.body.email,
    "password": req.body.password,
    "address": req.body.address,
    "city": req.body.city,
    "state": req.body.state,
    "zip": req.body.zip
  });

  user.save().then(function(data) {
    res.json(data.toJSON());
  });
};

exports.deleteUser = function(req, res) {
  'use strict';
  var user = new User();
  user.set('id', req.params.id);
  user.destroy().then(function(data) {
   res.json({
    'id': req.params.id
   });
  });
};

exports.getAllUsers = function(req, res) {
  'use strict';
  var users = new Users();
  users.fetch().then(function(data) {
    res.json(data.toJSON());
  });
};

exports.getUser = function(req, res) {
  'use strict';
  var user = new User({
    id: req.params.id
  });
  user.fetch().then(function(data) {
    res.json(data.toJSON());
  });
};