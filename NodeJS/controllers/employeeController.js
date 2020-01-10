//implement router from express
const express = require('express');
var router = express.Router();

// work with mongoose model employee
//so that require statement for this employee model
var { Employee } = require('../model/employee');

//a router to retrieve all employees from employees collection in mongodb
//=> localhost:3000/employees/
router.get('/', (req, res) => {
    Employee.find((err, docs) => {//retrieve all the record from this employee's collection
        if (!err) { res.send(docs); }
        else { console.log('Error in Retriving Employees :' + JSON.stringify(err, undefined, 2)); }
    });
});

//configure routes inside route file index.js
module.exports = router;