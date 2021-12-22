const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const employeeSchema = new Schema({
    employeeId: {type: Number, required: true, unique: true, default: false},
    jobRole: {type: String, required: true, default: false},
    contactNo: {type: Number, required: true, default: false},
    name: {type: String, required: true, default: false},
    emailId: {type: String, required: true, default: false},
    password: {type: String, required: true, minlength: 8, default: false}
})
const employee = mongoose.model('Employee', employeeSchema);
module.exports = employee;