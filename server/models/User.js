const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    fullname: String,
    username: String,
    password: String,
    type: String

});

UserSchema.options.toJSON = {
    transform: function (doc, ret, options) {
        delete ret.password;
        return ret;
    }
};

const User = mongoose.model('User', UserSchema);

module.exports = User;