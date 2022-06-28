require('dotenv').config();

const fs = require('fs');
const express = require('express');
const mongoose = require('mongoose');
const join = require('path').join;
const config = require('./config');

const models = join(__dirname, 'app/models');

const port = process.env.PORT || 3000;
const app = express();


module.exports = app;

// Bootstrap models
fs.readdirSync(models)
  .filter(file => ~file.search(/^[^.].*\.js$/))
  .forEach(file => require(join(models, file)));

require('./config/routers')(app);

connect();

function listen() {
  if (app.get('env') === 'test') return;
  app.listen(port);
  console.log('Express app started on port ' + port);
}

function connect() {
  mongoose.connection
    .on('error', console.log)
    .on('disconnected', connect)
    .once('open', listen);
  return mongoose.connect(config.db, {
    keepAlive: 1,
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
}

// test new branch