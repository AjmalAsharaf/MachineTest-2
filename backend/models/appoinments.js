const mongoose = require('mongoose')

const Schema = mongoose.Schema

const appoinmentShema = new Schema({
    day:{type:String,required:true},
    startTime:{type:String},
    endTime:{type:String}
},{timestamps:true})

module.exports= mongoose.model('Appoinment',appoinmentShema,'appoinments')