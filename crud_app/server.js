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

app.get('/',(req,res)=>{
    userModel.find({})
    .then(user => res.json(user))
    .catch(err => res.json(err));
})
app.post('/createUser',(req,res)=>{
    // console.log(req.body);
    const vali_result = validate(req.body);
    if(vali_result.result){
        userModel.create(req.body)
        .then(u => res.json(u))
    }else{
        res.status(400).send(
            {mes:vali_result.mes}
        );
       // console.log("false");
    }

})

app.delete('/delete/:id',(req,res)=>{
    const id = req.params['id']
    userModel.deleteOne({_id:id})
    .then(userr => res.json(userr));
})
app.get('/getUser/:id',(req, res)=>{
    const id = req.params['id'];
    userModel.findOne({_id:id})
    .then(ress => res.json(ress));
})
app.post('/updateUser/:id',(req, res)=>{
    const id = req.params['id'];
    const arr = req.body;
    const vali_result = validate(arr);
    if(vali_result.result){
        userModel.updateOne({_id:id},{
            $set:{
                name:arr.name,
                email:arr.email,
                phone:arr.phone,
                education:arr.education
            }
        })
        .then(ress => res.json(ress));
    }else{
        res.status(400).send(
            {mes:vali_result.mes}
        );
        console.log("false");
    }

    //console.log(req.body);
})


function validate(val){
    const name_pattern = /[0-9]/;
    const email_pattern = /[a-z0-9](@gmail.com)$/;
    const ph_pattern = /^[0-9]{10}$/
    if(name_pattern.test(val.name) ||val.name.length ==0){
        return {
            result: false ,
            mes:"Name"
        };
    }
    if(!email_pattern.test(val.email) ||  val.email.length ==0 ){
        return {
            result: false ,
            mes:"Email Id"
        };
    }
    if(!ph_pattern.test(val.phone)){
        return {
            result: false ,
            mes:"Phone number"
        };
    }
    if(val.education == ''){
        return{
            result:false,
            mes:"education"
        }
    }
    return {result:true}
}

app.listen(PORT , ()=>{console.log(`crud running in http://localhost:${PORT}`)});