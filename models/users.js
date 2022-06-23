const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    name:String,
    age:Number,
    avatar:String
})

module.exports=mongoose.model('Users',schema)
