'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var UserRouter = (0, _express.Router)();

UserRouter.get('/user', function (req, res) {
  res.send('get');
});

UserRouter.post('/user', function (req, res) {
  res.send('post');
});

UserRouter.put('/user', function (req, res) {
  res.send('put');
});

UserRouter.delete('/user', function (req, res) {
  res.send('delete');
});

exports.default = UserRouter;