const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const cors = require('cors')
const userModel = require('./user');

const app = express();
app.use(cors())
app.use(express.json())
dotenv.config({path:'config.env'});
const PORT = 8080;

mongoose.connect("mongodb://127.0.0.1:27017/crud");

app.post('/createUser',(req,res)=>{
    console.log(req.body);
    userModel.create(req.body)
    .then(u => res.json(u))
})

app.delete('/delete/:id',(req,res)=>{
    const id = req.params['id']
    userModel.deleteOne({_id:id})
    .then(userr => res.json(userr));
})

app.get('/',(req,res)=>{
    userModel.find({})
    .then(user => res.json(user))
    .catch(err => res.json(err));
})
app.listen(PORT , ()=>{console.log(`crud running in http://localhost:${PORT}`)});