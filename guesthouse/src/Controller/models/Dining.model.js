const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const diningSchema = new Schema({
    reservationDate: {type: Date, required: true, unique: true, default: false},
    guestId: {type: Number, required: true, default: false},
    totalGuests: {type: Number, required: true, default: false},
})
const dining = mongoose.model('Dining', diningSchema);
module.exports = dining;