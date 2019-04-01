const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const User = require('./User');

const manufacturerSchema = new Schema({
	user: { type: Schema.Types.ObjectId, ref: 'User' },
	name_of_business: String,
	address: String,
	city: String,
	state: String,
	country: String,
	zip_code: Number,
	logo: String,
	service: String
});

const Manufacturer = mongoose.model('Manufacturer', manufacturerSchema);

module.exports = Manufacturer;