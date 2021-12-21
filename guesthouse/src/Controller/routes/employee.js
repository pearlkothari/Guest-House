const router = require('express').Router();
let employee = require('../models/Employee.model');
let Dining = require('../models/Dining.model');
let Items = require('../models/Items.model');

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
router.route('/add').post(function(req, res) {
    const employeeId = req.body.employeeId;
    const jobRole = req.body.jobRole;
    const contactNo = req.body.contactNo;
    const name = req.body.Name;
    const emailId = req.body.emailId;
    const password = req.body.password;

    const emp = new employee({
        employeeId,
        jobRole,
        contactNo,
        name,
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

router.route('/delete').delete(function(req, res) {
    employee.findOneAndDelete({employeeId: req.body.employeeId})
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
    const bookingId = req.body.bookingId;
    const dining = new Dining({
        guestId,
        totalGuest,
        bookingId,
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
//add
//remove
//fetch through contact, id, emailid, name
//assign dining lounge
//add modify fetch items by caretaker
//login
module.exports = router;
