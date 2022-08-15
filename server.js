const dotenv = require('dotenv').config()
const colors = require('colors')
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const mongoose = require('mongoose');
const connectDB = require('./config/db')
const https = require('https');
const fs = require('fs');


const cors = require("cors")

// start server
const server = express();
server.use(cors())

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
var privateKey = fs.readFileSync( 'cert/privkey.pem' );
var certificate = fs.readFileSync( 'cert/cert.pem' );

https.createServer({
    key: privateKey,
    cert: certificate
}, server).listen(port);

//const listener = server.listen(port)
//console.log(`server listening on port ${listener.address().port}`)

module.exports = server;
