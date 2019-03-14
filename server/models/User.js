const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const projectSchema = new Schema({
    username: String,
    password: String,

});

projectSchema.options.toJSON = {
    transform: function (doc, ret, options) {
        delete ret.password;
        return ret;
    }
};

const User = mongoose.model('User', projectSchema);

module.exports = User;