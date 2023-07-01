'use strict'

const express = require('express');
const {config} = require('dotenv').config();

const PORT = process.env.PORT;

const server = express();  // if use app (or any other var name) instead of server, use app.get (or whatever var) below

const pageNotFoundHandler = require('./routeErrorHandlers/404.js');
const stamper = require('./middleware/stamper.js');

//  (req, res) => {
//   res.status(404).send({
//     error: 404,
//     route: req.path,
//     message: 'no data on this route',
//   });
// };


//Why error message in string?
const errorhandler = (error, req, res, next) => {
  res.status(500).send({
    error: 500,
    route: req.path,
    message: `server error: ${error.message}`,
  });
};

//middleware
const stamper = (req, res, next) => {
  req.timestamp = new Date();
  next();
};



server.get('/hello', stamper, (req, res) => res.send(`hello! ${req.timestamp}`));

// server.get('/*')
server.use('*', pageNotFoundHandler);
//(req, res) => res.send('Not the droids you\'re looking for'));
server.use(errorhandler);

server.listen(PORT, () => console.log('Listening on port:', PORT));

module.exports= server