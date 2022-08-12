const dotenv = require('dotenv').config()
const colors = require('colors')
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const mongoose = require('mongoose');
const connectDB = require('./config/db')

// start server
const server = express();

// set port
const port = process.env.PORT || 5000

// connect to DB
db = connectDB()

server.use(logger('dev'));
server.use(express.json());
server.use(express.urlencoded({extended: false}));
server.use(cookieParser());
server.use(express.static(path.join(__dirname, 'public')));

// create routes
server.use('/api/', require('./routes/index'));
server.use('/api/users', require('./routes/users'));
server.use('/api/comedian', require('./routes/comedians'));

// listen on port
const listener = server.listen(port)
console.log(`server listening on port ${listener.address().port}`)

module.exports = server;
