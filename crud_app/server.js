const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const cors = require('cors')
const userModel = require('./user');

const app = express();
app.use(cors())
dotenv.config({path:'config.env'});
const PORT = 8080;

mongoose.connect("mongodb://127.0.0.1:27017/crud");

app.post('/createUser',(req,res)=>{
    
    userModel.create(req.body)
    .then(u => res.json(u))
    // .then(err => res.json(err));
})


app.get('/',(req,res)=>{
    res.status(200);
})
app.listen(PORT , ()=>{console.log(`crud running in http://localhost:${PORT}`)});