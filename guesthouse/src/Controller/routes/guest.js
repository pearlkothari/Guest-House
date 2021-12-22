//fetch by id, name, roomtype, roomno, contactno
//add guest
//approval
const router = require('express').Router();
let guest = require('../models/Guest.model');

router.route('/login').post(function(req, res) {
    const emailId = req.body.emailId;
    const password = req.body.password;
    guest.findOne({emailId : emailId, password: password}, function(err, user) {
        if(err) {
            console.log(err);
            return res.status(500).send();
        }
        if(!user) {
            return res.status(404).send();
        }
        return res.status(200).json(user);
    })
});

router.route('/add').post(function(req, res) {
    const employeeId = req.body.employeeId;
    const jobRole = req.body.jobRole;
    const contactNo = req.body.contactNo;
    const name = req.body.Name;
    const emailId = req.body.emailId;
    const password = req.body.password;

    const user = new guest({
        employeeId,
        jobRole,
        contactNo,
        name,
        emailId,
        password,
    });

    user.save()
    .then(() => res.json('Guest added'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/feedback').post(function(req, res) {
    const name = req.body.employeeId;
    const feedback = req.body.feedback;
    const serviceRating = req.body.serviceRating;
    const foodRating = req.body.foodRating;
    const roomRating = req.body.roomRating;
    const overallExperience = req.body.overallExperience;

    const user = new guest({
        name,
        feedback,
        serviceRating,
        foodRating,
        roomRating,
        overallExperience,
    });

    user.save()
    .then(() => res.json('Feedback added'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/see').get(function(req, res) {
    guest.find()
    .then(user => res.json(user))
    .catch(err => res.status(400).json('Error: ' + err));
});

