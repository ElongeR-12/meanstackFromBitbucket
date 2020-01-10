//package import 
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors'); //require statement of cors package to enable request to mongoDB node.js from angular project

//to connect with mongoDB (local import form)
const {mongoose} = require ('./db.js');

//configure routes inside route file index.js
//require statement of employee controller
var employeeController = require('./controllers/employeeController.js');

// to work with express package
var app = express();

// configure express middleware in order to send json data to this nod.js project
app.use(bodyParser.json());

//use the middleware function of cors
app.use(cors({ origin:'http://localhost:4200' })); //this allow request from any port numer or domain, here we enable angular poject to make request by adding origin object parameter

//in order to start express server
app.listen(3000, () => console.log('Server started at port : 3000'));

//add router from employees
app.use('/employees', employeeController);