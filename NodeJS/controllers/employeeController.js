//implement router from express
const express = require('express');
var router = express.Router();

//import ObjectId from mongoose
var ObjectId = require('mongoose').Types.ObjectId;

// work with mongoose model employee
//so that require statement for this employee model
var { Employee } = require('../model/employee');

//a router to retrieve all employees from employees collection in mongodb
//=> localhost:3000/employees/
router.get('/', (req, res) => {
    Employee.find((err, docs) => {//retrieve all the employees from this employees collection
        if (!err) { res.send(docs); }
        else { console.log('Error in Retriving Employees :' + JSON.stringify(err, undefined, 2)); }
    });
});

// to retrieve salary by its ID
router.get('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))// ID pass through the array should be a value MongoDB ID
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    Employee.findById(req.params.id, (err, doc) => {// retrieve employee from mongodb
        if (!err) { res.send(doc); }
        else { console.log('Error in Retriving Employee :' + JSON.stringify(err, undefined, 2)); }
    });
});

//define one more route
router.post('/', (req, res) => {
    var emp = new Employee({
        name: req.body.name,//basically new Employee class send a request body data
        position: req.body.position,// so to retrieve name we use req.body.name and so on
        office: req.body.office,
        salary: req.body.salary,
    });
    emp.save((err, doc) => {//in order to insert new record into mongodb, doc is an object to return containing details of newly inserted employee with these properties
        if (!err) { res.send(doc); }
        else { console.log('Error in Employee Save :' + JSON.stringify(err, undefined, 2)); }
    });
});



//configure routes inside route file index.js
module.exports = router;