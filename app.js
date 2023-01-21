//Basic Lib import 
const express = require('express'); 
const router = require('./src/routes/api.js');
const bodyParser = require('body-parser'); 
const app = new express(); // express ojb creation 

//Security Middleware Lib import 
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');
const cors = require('cors');
const xssClean = require('xss-clean');
const hpp = require('hpp');
const mongoSanitize = require('express-mongo-sanitize'); 

//Database Lib import 
const mongoose = require('mongoose');

//Body parser Implementation 
app.use(bodyParser.json());

//Security Middleware implementation 
app.use(cors());
app.use(helmet());
app.use(xssClean());
app.use(hpp());
app.use(mongoSanitize());

//Request rate Limit 
const limiter = rateLimit({WindowMS:15*60*1000,max:3000});
app.use(limiter);

//MongoDB Connection 
let URI = "mongodb://127.0.0.1:27017/Todo";
let OPTION = {user:"", pass:"", autoIndex:true}; 
mongoose.connect(URI,OPTION,(error)=>{
    console.log("Connection Success");
    console.log(error); 
})

//Routing Implementation 
app.use("/api/v1",router) 

//Undefined Route Implementation 
app.use("*",(req,res)=>{
    res.status(404).json({status:"fail", data:"Not found"})
}) 


module.exports = app;