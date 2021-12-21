const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const itemSchema = new Schema({
    itemName: {type: String, required: true, unique: true, default: false},
    consumed: {type: Number, required: true, default: false},
    nonConsumed: {type: Number, required: true, default: false},
    Name: {type: String, required: true, default: false},
})
const item = mongoose.model('Item', itemSchema);
module.exports = item;