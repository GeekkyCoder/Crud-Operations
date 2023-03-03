const mongoose = require("mongoose")

const usersSchema = new mongoose.Schema({
    userId:{
        type:Number,
        required:true,
    },
    fullName:{
        type:String,
        required:true,
    },
    email:{
       type:String,
       required:true 
    },
    profession:{
        type:String,
        required:true,
    },
    contact:{
        type:"String",
        required:true
    } 
})


module.exports = mongoose.model("user",usersSchema)