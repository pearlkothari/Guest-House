const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookingSchema = new Schema({
    bookId: {type: Number, required: true, unique: true, default: false},
    relationship: {type: String, required: true, default: false},
    age: {type: Number, required: true, default: false},
    Name: {type: String, required: true, default: false},
    guestId: [{type: Schema.Types.ObjectId, ref: 'Guest' }],
    date: {type: Date, required: true, default: false}
})
const booking = mongoose.model('Booking', bookingSchema);
module.exports = booking;