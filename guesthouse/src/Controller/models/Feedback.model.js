const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const feedbackSchema = new Schema({
    name: {type: String, required: true, default: false},
    emailId: {type: String, required: true, default: false},
    feedback: {type: String, required: true, default: false},
    serviceRating: {type: String, required: true, default: false},
    foodRating: {type: String, required: true, default: false},
    roomRating: {type: String, required: true, default: false},
    overallExperience: {type: String, required: true, default: false}
})
const feedback = mongoose.model('Feedback', feedbackSchema);
module.exports = feedback;