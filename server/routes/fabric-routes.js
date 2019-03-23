const express = require('express');
const mongoose = require('mongoose');
const fabricRouter = express.Router();
const Fabric = require('../models/Fabric');

fabricRouter.get('/list-fabrics', (req, res, next) => {
	Fabric.find().populate('fabrics')
		.then(allFabrics => {
			res.json(allFabrics);
		})
		.catch(err => {
			res.json(err);
		})
});

fabricRouter.post('/createFabric', (req, res, next) => {
    Fabric.create({
        type: req.body.type,
        quantity: req.body.quantity,
        unit_cost: req.body.unit_cost,
        description: req.body.description
		})
		.then(response => {res.json(response)})
    .catch(err => {err.json(err)});
});

module.exports = fabricRouter;