const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const guestSchema = new Schema({
    emailId: {type: String, required: true, unique: true, default: false},
    designation: {type: String, required: true, default: false},
    contactNo: {type: Number, required: true, default: false},
    Name: {type: String, required: true, default: false},
    guestId: {type: String, required: true, unique: true, default: false},
    guestType: {type: String, required: true, default: false},
    approved: {type: String, required: true, default: false},
    roomNo: {type: Number, required: true, default: false},
    roomType: {type: String, required: true, default: false}
})
const guest = mongoose.model('Guest', guestSchema);
module.exports = guest;