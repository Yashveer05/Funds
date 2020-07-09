const mongoose = require('mongoose');

const Schema = mongoose.Schema;
//login
let userSchema = new Schema({
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
let User1 = mongoose.model('user1', userSchema);

// Donation
let donationsSchema = new Schema({
    numberOfCloths: {
        type: Number
    },
    address: {
        type: String
    },
    phone: {
        type: Number
    },
    date: {
         type : Date,
         default: Date.now
    }
});
let Donation = mongoose.model('donation', donationsSchema);


/*
const AdminSchema = new Schema({
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
    
});
const Admin = mongoose.model('admin', AdminSchema);
*/
// registration
let RegisSchema = new Schema({
    name: {
        type: String
           },
    email: {
        type: String
    },
    password: {
        type: String
        
    },
    phone: {
        type: Number        
    },
    address:{
        type:String
        

    }
});
let Registration = mongoose.model('user', RegisSchema);

module.exports = { User1, Donation ,Registration};