const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const Designer = require('../models/Designer');

router.get('/list-designers', (req, res, next) => {
    Designer.find().populate('user')
        .then(allDesigners => {
            res.json(allDesigners);
        })
        .catch(err => {
            res.json(err);
        })
});

router.post('/create-designer', (req, res, next) => {
    Designer.create({
        user: req.user._id,
        brand: req.body.brand,
        full_name: req.body.full_name,
        address: req.body.address,
        city: req.body.city,
        zipcode: req.body.zipcode,
        state: req.body.state,
        country: req.body.country,
        email: req.body.email,
        designer_inspiration: req.body.designerInspiration,
        fabric_types: req.body.fabric_types,
        category_types: req.body.category_types
    }).then(response => { res.json(response) }).catch(err => { err.json(err) });
});

module.exports = router;