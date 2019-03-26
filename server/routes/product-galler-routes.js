const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const ProductGallery = require('../models/product-gallery');

router.get('/product-gallery', (req, res, next) => {
	ProductGallery.find().populate('ProductGalleries')
		.then(ProductGalleries => {
			res.json(ProductGalleries);
		})
		.catch(err => {
			res.json(err);
		})
});

router.post('/createProGallery', (req, res, next) => {
    Designer.create({
      file_name: req.body.file_name,
			contentType: req.body.contentType,
			upload_date: req.body.upload_date,
			meta_data: req.body.meta_data
		}).then(response => {res.json(response)}).catch(err => {err.json(err)});
})

module.exports = router;