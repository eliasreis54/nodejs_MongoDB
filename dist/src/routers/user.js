'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _user = require('../models/user');

var _user2 = _interopRequireDefault(_user);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var UserRouter = (0, _express.Router)();

UserRouter.get('/user', function (req, res) {
  _user2.default.find({}, function (err, users) {
    res.json(users);
  });
});

UserRouter.post('/user', function (req, res) {
  res.send('post');
});

UserRouter.put('/user', function (req, res) {
  var user = new _user2.default({ name: 'Elias', age: '22' });
  user.save();
  res.send('put');
});

UserRouter.delete('/user', function (req, res) {
  res.send('delete');
});

exports.default = UserRouter;