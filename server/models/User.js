const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const projectSchema = new Schema({
    username: String,
    password: String,

});

const User = mongoose.model('User', projectSchema);

module.exports = User;