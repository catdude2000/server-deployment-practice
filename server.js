'use strict'

const express = require('express');

const server = express();  // if use app (or any other var name) instead of server, use app.get (or whatever var) below

const pageNotFoundHandler = require('./routeErrorHandlers/404.js');
const errorhandler = require('./routeErrorHandlers/500.js')
const stamper = require('./middleware/stamper.js');

//middleware

server.get('/hello', stamper, (req, res) => res.send(`hello! ${req.timestamp}`));

server.get('/goodbye', (_, res) => res.send('goodbye'));

server.get('/bad/', (req, res, next) => {
  next({ message: 'this is a bad route'})
});

server.use('*', pageNotFoundHandler);
//(req, res) => res.send('Not the droids you\'re looking for'));
server.use(errorhandler);

module.exports= server