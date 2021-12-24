const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const dininSchema = new Schema({
    emailId: {type: String, required: true, default: false},
    reservationDate: {type: Date, required: true, default: false},
    totalGuests: {type: Number, required: true, default: false},
    approved: {type: Boolean, required: true, default: false},
})
const dinin = mongoose.model('Dinin', dininSchema);
module.exports = dinin;