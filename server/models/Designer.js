const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ProductGallery = require('./product-gallery');
const User = require('./User');
const validate = require('mongoose-validator');

const designerSchema = new Schema({
	user: { type: Schema.Types.ObjectId, ref: 'User' },
	brand: String,
	address: String,
	city: String,
	state: String,
	zipcode: Number,
	country: String,
	designInspiration: String,
	product_types: String,
	//image?
	product_gallery: { type: Schema.Types.ObjectId, ref: 'ProductGallery' },
	category_types: [],
	source: ''
}, { timestamps: true });

const Designer = mongoose.model('Designer', designerSchema);

module.exports = Designer;