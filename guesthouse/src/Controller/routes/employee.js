const router = require('express').Router();
let employee = require('../models/Employee.model');
let Dining = require('../models/Dining.model');
let Items = require('../models/Items.model');
let Feedback = require('../models/Feedback.model');
let Booking = require('../models/Booking.model');
let Rooms = require('../models/Rooms.model');
let Guests = require('../models/Guest.model');

router.route('/login').post(function(req, res) {
    const emailId = req.body.emailId;
    const password = req.body.password;
    employee.findOne({emailId : emailId, password: password}, function(err, emp) {
        if(err) {
            console.log(err);
            return res.status(500).send();
        }
        if(!emp) {
            return res.status(404).send();
        }
        return res.status(200).json(emp);
    })      
});
router.route('/approveGuests').get(function(req, res) {
    Booking.find({approved: false}, function(err, emp) {
        if(err) {
            console.log(err);
            return res.status(500).send();
        }
        if(!emp) {
            return res.status(404).send();
        }
        return res.status(200).json(emp);
    })
});
router.route('/update/Guests').post(function(req, res) {
    Booking.findOneAndUpdate({Name:req.body.Name},
        {$set:{approved:true}},{new:true},function(err, emp) {
        if(err) {
            console.log(err);
            return res.status(500).send();
        }
        if(!emp) {
            return res.status(404).send();
        }
        return res.status(200).json(emp);
    })
});
router.route('/add').post(function(req, res) {
    const employeeId = req.body.employeeId;
    const jobRole = req.body.jobRole;
    const contactNo = req.body.contactNo;
    const Name = req.body.Name;
    const emailId = req.body.emailId;
    const password = req.body.password;

    const emp = new employee({
        employeeId,
        jobRole,
        contactNo,
        Name,
        emailId,
        password,
    });

    emp.save()
    .then(() => res.json('Employee added'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/see').get(function(req, res) {
    employee.find()
    .then(emp => res.json(emp))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/see/dining').post(function(req, res) {
    const date = new Date();
    Dining.find({reservationDate: {
        $gte: date
    }})
    .then(emp => res.json(emp))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/see/caretaker').get(function(req, res) {
    employee.find({jobRole: "Caretaker"})
    .then(emp => res.json(emp))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/delete/:emailId').delete(function(req, res) {
    employee.findOneAndDelete({emailId: req.params.emailId})
    .then(() => res.json('Employee deleted'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/search/contact').get(function(req, res) {
    employee.find({contactNo: req.body.contactNo})
    .then(emp => res.json(emp))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/search/id').get(function(req, res) {
    employee.find({employeeId: req.body.employeeId})
    .then(emp => res.json(emp))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/search/emailId').get(function(req, res) {
    employee.find({emailId: req.body.emailId})
    .then(emp => res.json(emp))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/search/name').get(function(req, res) {
    employee.find({name: req.body.name})
    .then(emp => res.json(emp))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/assignDiningLounge').post(function(req, res) {
    const guestId = req.body.guestId;
    const totalGuest = req.body.totalGuest;
    const reservationDate = req.body.reservationDate;
    const dining = new Dining({
        guestId,
        totalGuest,
        reservationDate,
    });

    dining.save()
    .then(() => res.json('Dining resevation confirmed'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add/items').post(function(req, res) {
    const itemName = req.body.itemName;
    const consumed = req.body.consumed;
    const nonConsumed = req.body.nonConsumed;
    const Name = req.body.Name;

    const items = new Items({
        itemName,
        consumed,
        nonConsumed,
        Name
    });

    items.save()
    .then(() => res.json('items added'))
    .catch(err => res.status(400).json('Error: ' + err));
});
router.route('/update/items').post(function(req, res) {
    Items.updateOne({
        itemName: req.body.itemName,
        consumed: req.body.consumed,
        nonConsumed: req.body.nonConsumed,
        Name: req.body.Name,
    })
    .then(item => res.json('Items updated'))
    .catch(err => res.status(400).json('Error: ' + err));
});
router.route('/see/items').get(function(req, res) {
    Items.find()
    .then(item => res.json(item))
    .catch(err => res.status(400).json('Error: ' + err));
});
router.route('/see/feedback').get(function(req, res) {
    Feedback.find()
    .then(feedback => res.json(feedback))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add/rooms').post(function(req, res) {
    const roomNo = req.body.roomNo;
    const availability = req.body.availability;
    const charge = req.body.charge;
    const roomType = req.body.roomType;

    const room = new Rooms({
        roomNo,
        availability,
        charge,
        roomType
    });

    room.save()
    .then(() => res.json('room added'))
    .catch(err => res.status(400).json('Error: ' + err));
});
router.route('/update/rooms').post(function(req, res) {
    Rooms.updateOne({
        roomNo: req.body.roomNo,
        availability: req.body.availability,
        charge: req.body.charge
    })
    .then(room => res.json('rooms updated'))
    .catch(err => res.status(400).json('Error: ' + err));
});
router.route('/see/rooms').get(function(req, res) {
    Rooms.find()
    .then(room => res.json(room))
    .catch(err => res.status(400).json('Error: ' + err));
});
//add
//remove
//fetch through contact, id, emailid, name
//assign dining lounge
//add modify fetch items by caretaker
//login
module.exports = router;
