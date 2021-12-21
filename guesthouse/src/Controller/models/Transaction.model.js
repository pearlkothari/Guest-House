const { Double } = require('mongodb');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const transactionSchema = new Schema({
    transactionId: {type: Number, required: true, unique: true, default: false},
    amount: {type: Double, required: true, default: false},
    status: {type: String, required: true, default: false},
    guestId: [{type: Schema.Types.ObjectId, ref: 'Guest' }],
    date: {type: Date, required: true, default: false},
})
const transaction = mongoose.model('Transaction', transactionSchema);
module.exports = transaction;