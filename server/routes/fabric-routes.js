const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const Fabric = require('../models/Fabric');

router.get('/list_fabrics', (req, res, next) => {
	User.find().populate('fabrics')
		.then(allFabrics => {
			res.json(allFabrics);
		})
		.catch(err => {
			res.json(err);
		})
});

router.post('/createFabric', (req, res, next) => {
    Fabric.create({
        type: req.body.type,
        quantity: req.body.quantity,
        unit_cost: req.body.unit_cost,
        description: req.body.description
});