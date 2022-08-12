const dotenv = require('dotenv').config()
const colors = require('colors')
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const mongoose = require('mongoose');
const connectDB = require('./config/db')

const server = express();

const port = process.env.PORT || 5000

db = connectDB()

server.use(logger('dev'));
server.use(express.json());
server.use(express.urlencoded({ extended: false }));
server.use(cookieParser());
server.use(express.static(path.join(__dirname, 'public')));

// create routes
server.get('/', function(req, res, next) {
    res.send('test');
});
server.use('/api/', require('./routes/index'));
server.use('/api/users',  require('./routes/users'));
server.use('/api/comedian', require('./routes/comedians'));

server.listen(port)

module.exports = server;
