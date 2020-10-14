const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    firstname: {type: String,unique:true, required: true},
    lastname: {type: String, required: true},
    phone: { type: Number, required: true },
    email:{type:String,required:true},
    message:{type:String,required:true},
    createdDate: { type: Date, default: Date.now }
});

schema.set('toJSON', { virtuals: true });

module.exports = mongoose.model('Contact', schema);
