const { Router } = require('express');
const express=require('express');
const bcrypt=require('bcrypt');
const bodyParser=require('body-parser');

const PORT=3090;

//import module for connection
const connection=require('./app/model/connection');

//import the user module
const productRoute=require('./app/routes/route')

const app=express();

//middleware
app.use(express.urlencoded({extended:true}));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

// app.use("/",(req,res)=>{
//     res.send('Welcome to Login page');
// })


require('./app/routes/route')(app);  

app.listen(PORT);

