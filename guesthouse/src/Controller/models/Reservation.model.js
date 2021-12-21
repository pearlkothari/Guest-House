const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reservationSchema = new Schema({
    reservationId: {type: Number, required: true, unique: true, default: false},
    roomId: [{type: Schema.Types.ObjectId, ref: 'Rooms' }],
    checkIn: {type: Date, required: true, default: false},
    checkOut: {type: Date, required: true, default: false},
    guestId: [{type: Schema.Types.ObjectId, ref: 'Guest' }],
})
const reservation = mongoose.model('Reservation', reservationSchema);
module.exports = reservation;