'use strict';

// dependencies
const express = require('express');
const bodyParser = require('body-parser');

// local dependencies
const routes = require('./routes');

//server
const app = express();

//middleware
app.use(bodyParser.json());

app.use('/', routes);

//TODO error handling

// launch server
app.listen(3000, function(){
  console.log('listening on 3000');
});
