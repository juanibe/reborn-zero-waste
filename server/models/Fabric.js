const mongoose = required('mongoose');
const Schema = mongoose.Schema;

const fabricSchema = new Schema({
	type: String,
	quantity: String,
	unit_cost: String,
	description: String
});

const Fabric = mongoose.model('Fabric', fabricSchema);

module.exports = Fabric;