const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ProductGallery = require('./product-gallery');
const User = require('./User');
const validate = require('mongoose-validator');

const designerSchema = new Schema({
	user_id: {type: Schema.Types.ObjectId, ref: 'User'},
	brand_name: String,
	full_name: String,
	address: String,
	city: String,
	zipcode: Number,
	state: String,
	country: String,
	email: {type: String, lowercase: true, trim: true, index: true, unique: true, sparse: true, 
		validate:[validate({
  		validator: 'isEmail',
  		message: 'Not a valid email'
  	})]
  },
	designInspiration: String,
	product_types: String,
	product_gallery: {type: Schema.Types.ObjectId, ref: 'ProductGallery'},
	category_type: String
}, {timestamps: true});

const Designer = mongoose.model('Designer', designerSchema);

module.exports = Designer;