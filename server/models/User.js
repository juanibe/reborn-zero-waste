const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// const ProductGallery = require('./product-gallery');

const UserSchema = new Schema({
    fullname: String,
    username: String,
    password: String,
    role: { type: String, enum: ['designer', 'manufacturer'] },
    designerInformation: {
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
        product_gallery: { type: Schema.Types.ObjectId, ref: 'ProductGallery' },
        category_type: String
    },
    manufacturerInformation: {
        name_of_business: String,
        address: String,
        city: String,
        state: String,
        country: String,
        zipcode: Number,
        business_logo: String,
        services_offered: String
    }
});

UserSchema.options.toJSON = {
    transform: function (doc, ret, options) {
        delete ret.password;
        return ret;
    }
};

const User = mongoose.model('User', UserSchema);

module.exports = User;