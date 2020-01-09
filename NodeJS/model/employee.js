// first we need a request statement for mongoose
const mongoose = require('mongoose');

//the model for employee
var Employee = mongoose.model('Employee', {
    name: { type: String },
    position: { type: String },
    office: { type: String },
    salary: { type: Number }
},);

// we have to export this employee
module.exports = { Employee };