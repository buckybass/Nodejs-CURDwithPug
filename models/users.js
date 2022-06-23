const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    name:{
      type:String,
      required:true,
      trim:true,
      maxlength:[100,'ชื่อต้องไม่เกิน 100 ตัว']
    },
    age:{
      type:Number,
      required:true,
      min:[1,'อายุต้องมากว่า 1'],
      max:[150,'อายุต้องไม่เกิน 150']},
    avatar:String
},{timestamps:true})

module.exports=mongoose.model('Users',schema)
