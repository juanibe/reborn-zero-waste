const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const User = require('./User');

const manufacturerSchema = new Schema({
	user_id: {type: Schema.Types.ObjectId, ref: 'User'},
	name_of_business: String,
	address: String,
	city: String,
	state: String,
	country: String,
	zipcode: Number,
	business_logo: String,
	services_offered: String
});

const Manufacturer = mongoose.model('Manufacturer', manufacturerSchema);

module.exports = Manufacturer;