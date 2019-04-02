const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const User = require('./User');

const fabricSchema = new Schema({
	user_id: { type: Schema.Types.ObjectId, ref: 'User' },
	fabricType: String,
	quantity: String,
	unit_cost: String,
	deadlinedate: String,
	description: String
});

const Fabric = mongoose.model('Fabric', fabricSchema);

module.exports = Fabric;