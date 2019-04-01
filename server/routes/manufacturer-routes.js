const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const Manufacturer = require('../models/Manufacturer');

router.get('/list-manufacturer', (req, res, next) => {
	Manufacturer.find().populate('user')
		.then(allManufactures => {
			// TODO: call hendrik when you arrive here
			// find the fabrics for each manufacturer
			// allManufactures.map(m => Fabric.find({ owner: m.user._id })
			res.json(allManufactures);
		})
		.catch(err => {
			res.json(err);
		})
});

router.post('/create-manufacturer', (req, res, next) => {
	Manufacturer.create({
		user: req.user._id,
		name_of_business: req.body.name_of_business,
		address: req.body.address,
		city: req.body.city,
		state: req.body.state,
		country: req.body.country,
		zip_code: req.body.zip_code,
		logo: req.body.logo,
		service: req.body.service
	})
		.then(response => { res.json(response) })
		.catch(err => { err.json(err) });
});

module.exports = router;
