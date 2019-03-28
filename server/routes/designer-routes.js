const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const Designer = require('../models/Designer');

router.get('/list-designers', (req, res, next) => {
    Designer.find().populate('designers')
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
        brand_name: req.body.brand_name,
        full_name: req.body.full_name,
        address: req.body.address,
        city: req.body.city,
        zipcode: req.body.zipcode,
        state: req.body.state,
        country: req.body.country,
        email: req.body.email,
        designer_inspiration: req.body.designerInspiration,
        product_types: req.body.product_types,
        category_type: req.body.category_type
    }).then(response => { res.json(response) }).catch(err => { err.json(err) });
});

module.exports = router;