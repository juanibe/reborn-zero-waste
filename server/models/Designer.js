const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ProductGallery = require('./product-gallery');
const User = require('./User');
const validate = require('mongoose-validator');

const designerSchema = new Schema({
	user: { type: Schema.Types.ObjectId, ref: 'User' },
	brand: String, //yes
	address: String, //yes
	city: String, //yes
	state: String, //yes
	zipcode: Number, //yes
	country: String, //yes
	designInspiration: String,
	fabric_types: [], //yes
	//image?
	product_gallery: { type: Schema.Types.ObjectId, ref: 'ProductGallery' },
	category_types: [],
	source: ''
}, { timestamps: true });

const Designer = mongoose.model('Designer', designerSchema);

module.exports = Designer;