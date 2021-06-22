const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const users = require('../routes/users');
const error = require('../middleware/error');

module.exports = function(app) {
  app.use(express.json());
  app.use(cors());
  app.use(helmet());
  app.use('/api/users', users);
  app.use(error);
};