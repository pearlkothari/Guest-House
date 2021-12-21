const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const diningSchema = new Schema({
    ReservationDate: {type: Number, required: true, unique: true, default: false},
    guestId: [{type: Schema.Types.ObjectId, ref: 'Guest' }],
    totalGuests: {type: Number, required: true, default: false},
})
const dining = mongoose.model('Dining', diningSchema);
module.exports = dining;