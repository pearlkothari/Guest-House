const router = require('express').Router();
let employee = require('../models/Employee.model');

router.route('/').post(function(req, res) {
    const name = req.body.name;
    const password = req.body.password;

    const newuser = new employee();
    newuser.name = name;
    newuser.password = password;
    newuser.save()
        .then(() => res.json('employee added'))
        .catch(err => res.status(404).json('err' + err));


});

module.exports = router;
