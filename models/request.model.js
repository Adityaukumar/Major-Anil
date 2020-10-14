const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    name:{type: String,unique:true, required: true},
    contact: { type: Number, required: true },
    id:{type:Number,required:true},
    type:{type:String,required:true},
    pname:{type:String,required:true},
    page:{type:Number,required:true},
    gender:{type:String,required:true},
    requestFor:{ type: String, enum: ['blood', 'platelets'] },
    bloodGroup:{type:String,enum:['A+','A-','B+','B-','AB+','AB-','O+','O-','other']},    
    units:{type:Number,required:true},
    location:{type:String,required:true},
    requiredDate:{type:Date,required:true},    
});

schema.set('toJSON', { virtuals: true });

module.exports = mongoose.model('Request', schema);