const mongoose = require('mongoose')

const userSchem= new mongoose.Schema(
   {
    email:String,
    password:String
   }
);


module.exports=mongoose.model('user',userSchem);