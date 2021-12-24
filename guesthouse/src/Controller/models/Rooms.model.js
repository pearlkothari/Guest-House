const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const roomSchema = new Schema({
    roomNo: {type: Number, required: true, unique: true, default: false},
    availability: {type: Boolean, required: true, default: false},
    charge: {type: Number, required: true, default: false},
    roomType: {type: String, required: true, default: false},
})
const room = mongoose.model('Rooms', roomSchema);
module.exports = room;