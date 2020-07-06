const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: {
        type: String
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    phone: {
        type: Number
    },
    address: {
        type: String
    }
});
const User = mongoose.model('user', userSchema);

const donationsSchema = new Schema({
    numberOfCloths: {
        type: Number
    },
    address: {
        type: String
    },
    phone: {
        type: Number
    }
});
const Donation = mongoose.model('donation', donationsSchema);

module.exports = { User, Donation };