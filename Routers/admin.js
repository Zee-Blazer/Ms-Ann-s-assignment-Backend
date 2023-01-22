const express = require('express');
const router = express.Router();

// Admin model
const { Admin } = require('../Models/admin');

router.post('/new', (req, res) => {
    const admin = new Admin(req.body);
    admin.save((err, doc) => {
        if (err) return err;
        console.log(doc);
    })
})

// module.exports = router;
module.exports = router;

