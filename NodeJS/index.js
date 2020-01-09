//package import 
const express = require('express');
const bodyParser = require('body-parser');

//to connect with mongoDB (local import form)
const {mongoose} = require ('./db.js');

// to work with express package
var app = express();

// configure express middleware in order to send json data to this nod.js project
app.use(bodyParser.json());

//in order to start express server
app.listen(3000, () => console.log('Server started at port : 3000'));