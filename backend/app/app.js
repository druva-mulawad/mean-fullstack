const express=require('express')
const app=express()
const cors=require('cors');

const bodyparser=require('body-parser')

app.use(bodyparser.urlencoded({extended:false}))
app.use(bodyparser.json())
app.use(cors())


const registerRouter=require('../router/router');

app.use('/',registerRouter);


app.use((req,res)=>{
    res.status(200).json({
        message:"app routing is running"
    })
})


module.exports=app
