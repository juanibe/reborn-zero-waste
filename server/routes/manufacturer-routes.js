const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const Fabric = require('../models/Manufacturer');

router.get('/list_manufacturer', (req, res, next) => {
	User.find().populate('manufacturers')
		.then(allManufacturers => {
			res.json(allManufacturers);
		})
		.catch(err => {
			res.json(err);
		})
});

router.post('/createManufacturer', (req, res, next) => {
    Fabric.create({
        type: req.body.type,
        name_of_business: req.body.name_of_business,
        address: req.body.address,
        city: req.body.city,
        state: req.body.state,
        country: req.body.country,
        zipcode: req.body.zipcode,
        business_logo: require.body.business_logo,
        services_offered: require.body.services_offered
 });