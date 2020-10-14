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
    organ:{ type: String, enum: ['heart','kidney','liver','cornea', 'pancrea','other'] },
    location:{type:String,required:true},
    requiredDate:{type:Date,required:true},    
});

schema.set('toJSON', { virtuals: true });

module.exports = mongoose.model('Orequest', schema);