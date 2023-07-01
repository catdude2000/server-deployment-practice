'use strict'

const express = require('express');
const {config} = require('dotenv').config();

const PORT = process.env.PORT;

const server = express();

server.listen(PORT, () => console.log('Listening on port:', PORT));
