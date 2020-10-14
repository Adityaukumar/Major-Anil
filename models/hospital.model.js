const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    name:{type: String, required: true},
    hid: { type: String,unique:true, required: true },
    password: { type: String, required: true },
    location: { type: String, required: true },
    contact: { type: String, required: true },
    role:{type:String,enum:['hospital']},
    createdDate: { type: Date, default: Date.now }
});

schema.set('toJSON', { virtuals: true });

module.exports = mongoose.model('Hospital', schema);
