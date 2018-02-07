'use strict';

const express = require('express');
const app = express();
const compression = require('compression');
const bodyParser = require('body-parser');
const host = require('../serverConfig').host;
const port = require('../serverConfig').port;
const path = require('path');
const routes = require('../server/routes/index');

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'POST, GET, PUT');
  res.header('Access-Control-Allow-Headers', 'X-PINGOTHER, Content-Type');
  next();
});

app.use(compression());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/api/store', routes);

app.use(express.static(path.join(__dirname, './../lib')));

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname + './../lib/index.html'));
});

app.listen(port, (err) => {
  if (err) {
    console.log(err)
  }
  console.log(`The server is running at http://${host}:${port}/`);
});
