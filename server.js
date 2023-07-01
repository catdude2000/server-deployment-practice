'use strict'

const express = require('express');
const {config} = require('dotenv').config();

const PORT = process.env.PORT;

const server = express();  // if use app (or any other var name) instead of server, use app.get (or whatever var) below

const pageNotFoundHandler = (req, res) => {
  res.status(404).send({
    error: 404,
    route: req.path,
    message: 'no data on this route',
  });
};

const errorhandler = (error, req, res, next) => {
  res.status(500).send({
    error: 500,
    route: req.path,
    message: 'server error: , ${error.message}',
  })
}

server.get('/hello', (req, res) => res.send('hello!'));

// server.get('/*')
server.use('*', pageNotFoundHandler);
//(req, res) => res.send('Not the droids you\'re looking for'));
server.use(errorhandler);

server.listen(PORT, () => console.log('Listening on port:', PORT));
