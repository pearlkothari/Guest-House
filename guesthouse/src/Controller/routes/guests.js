//fetch by id, name, roomtype, roomno, contactno
//add guest
//approval
const router = require('express').Router();
let guest = require('../models/Guest.model');
let Dinin = require('../models/Dining.model');
let Booking = require('../models/Booking.model');
let Feedback = require('../models/Feedback.model');

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
    const emailId = req.body.emailId;
    const designation = req.body.designation;
    const contactNo = req.body.contactNo;
    const Name = req.body.Name;
    const guestId = req.body.guestId;
    const guestType = req.body.guestType;
    const approved = req.body.approved;
    const roomNo = req.body.roomNo;

    const user = new guest({
        emailId,
        designation,
        contactNo,
        Name,
        guestId,
        guestType,
        approved,
        roomNo
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

    const user = new Feedback({
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
router.route('/bookRoom').post(function(req, res) {
    const Name = req.body.Name;
    const relation = req.body.relation;
    const age = req.body.age;
    const contactNo = req.body.contactNo;
    const checkIn = req.body.checkIn;
    const checkOut = req.body.checkOut;
    const emailId = req.body.emailId;

    const user = new Booking({
        Name,
        relation,
        age,
        contactNo,
        checkIn,
        checkOut,
        emailId
    });
    user.save()
    .then(() => res.json('Booking added'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/bookDining').post(function(req, res) {
    const guestId = req.body.guestId;
    const reservationDate = req.body.reservationDate;
    const totalGuests = req.body.totalGuests;

    const user = new Dinin({
        guestId,
        reservationDate,
        totalGuests
    });

    user.save()
    .then(() => res.json('Booking for dining added'))
    .catch(err => res.status(400).json('Error: ' + err));
});


router.route('/see').get(function(req, res) {
    guest.find()
    .then(user => res.json(user))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/search/contact').get(function(req, res) {
    guest.find({contactNo: req.body.contactNo})
    .then(emp => res.json(emp))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/search/id').get(function(req, res) {
    guest.find({employeeId: req.body.employeeId})
    .then(emp => res.json(emp))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/search/roomNo').get(function(req, res) {
    guest.find({roomNo: req.body.roomNo})
    .then(emp => res.json(emp))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/search/name').get(function(req, res) {
    guest.find({name: req.body.name})
    .then(emp => res.json(emp))
    .catch(err => res.status(400).json('Error: ' + err));
});
module.exports = router;
