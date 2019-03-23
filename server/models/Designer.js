const mongoose = required('mongoose');
const Schema = mongoose.Schema;
const ProductGallery = required('./product-gallery');
const User = required('./User');

const designerSchema = new Schema({
	user_id: {type: Schema.Types.ObjectId, ref: 'User'}
	brand_name: String,
	full_name: String,
	address: String,
	city: String,
	zipcode: Number,
	state: String,
	country: String,
	email: String,
	designInspiration: String,
	product_types: String,
	product_gallery: {type: Schema.Types.ObjectId, ref: 'ProductGallery'}
	category_type: String
});

const Designer = mongoose.model('Designer', designerSchema);

module.exports = Designer;