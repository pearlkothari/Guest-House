const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookingSchema = new Schema({
    relation: {type: String, required: true, default: false},
    age: {type: Number, required: true, default: false},
    Name: {type: String, required: true, default: false},
    emailId: {type: String, required: true, default: false},
    contactNo: {type: Number, required: true, default: false},
    checkIn: {type: Date, required: true, default: false},
    checkOut: {type: Date, required: true, default: false},
    roomNo: {type: String, required: true, default: "Not Alloted"},
    approved: {type: Boolean, required: true, default: false}, 
    guestType:{type:String,required:true,default:"general"}
})
const booking = mongoose.model('Booking', bookingSchema);
module.exports = booking;