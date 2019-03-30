const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const User = require('./User');

const fabricSchema = new Schema({
	owner: { type: Schema.Types.ObjectId, ref: 'User' },
	type: String,
	quantity: String,
	unit_cost: String,
	description: String
});

const Fabric = mongoose.model('Fabric', fabricSchema);

module.exports = Fabric;