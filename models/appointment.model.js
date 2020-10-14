const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    name: {type: String,unique:true, required: true},
    email: {type: String, required: true},
    contact: { type: Number, required: true },
    gender:{ type: String, enum: ['male', 'female'] },
    location: {type: String, required: true},
    age: {type: String, required: true},
    hospital:{ type: String, enum: ['apollo','yashoda','kims','care', 'sunshine'] },
    type:{ type: String, enum: ['blooddonation', 'organdonation'] },
    bloodGroup:{type:String,enum:['A+','A-','B+','B-','AB+','AB-','O+','O-']},
    date:{type:Date,required:true},
    createdDate: { type: Date, default: Date.now }
});

schema.set('toJSON', { virtuals: true });

module.exports = mongoose.model('Appointment', schema);