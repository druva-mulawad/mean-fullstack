const express = require("express");

const http=require('http')

const mongoose=require('mongoose')
const app=require('../app/app');
const { error } = require("console");
const server= http.createServer(app);



mongoose.connect('mongodb://0.0.0.0:27017/users',{ useNewUrlParser: true, useUnifiedTopology: true,})
.then(()=>console.log('DB connnected'))
.catch((error)=>console.log('error in DB connecting',error))

server.listen(3000, console.log('server is listening on port 3000'));