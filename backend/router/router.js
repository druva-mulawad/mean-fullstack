const express=require('express')

const router= express.Router();

const userSchema=require('../models/user')


router.get('/',(req,res)=>{
    res.send('register get responce');
})


router.post('/register',(req,res)=>{
    const user = new userSchema({
        email:req.body.email,
        password:req.body.password
    })
    user.save().then(()=>{
        res.send(user)
    }).catch((err)=>console.log(err))
})

module.exports=router