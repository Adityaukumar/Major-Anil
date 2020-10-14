const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    name: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    email: { type: String, required: true },
    age: { type: String, required: true },
    location: { type: String, required: true },
    contact: { type: Number },
    type: { type: String, enum: ['bdonor', 'odonor'] },
    bgroup: { type: String, enum: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-', 'other'] },
    profilePic: { type: String },
    role:{type:String,enum:['user']},
    createdDate: { type: Date, default: Date.now }
});

schema.set('toJSON', { virtuals: true });

module.exports = mongoose.model('User', schema);