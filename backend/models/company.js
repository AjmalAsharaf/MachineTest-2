const mongoose = require('mongoose')

const Schema = mongoose.Schema


const companyShema = new Schema({
    name:{type:String,required:true},
    address:{type:String,required:true},
    city:{type:String,required:true},
    state:{type:String,required:true},
    zip:{type:Number,required:true},
    phone:{type:Number,required:true},
    website:{type:String,required:true},
    email:{type:String,required:true,unique:true},
    status:{type:String,default:'Active'}

},{timestamps:true})

module.exports= mongoose.model('Company',companyShema,'companies')