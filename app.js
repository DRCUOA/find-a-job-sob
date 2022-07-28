



const express = require('express');
const app = express();
const serverDebug = require('debug')('Server:debug-Msg');
const databaseDebug = require('debug')('Database:debug-Msg');
const appDebug = require('debug')('app:debug-Msg');
const config = require('config');

// view-engine
app.use('view-engine', ejs);

//middleware
app.use(express.json());
app.use(express.urlencoded)


//- database-connection




