const express = require('express');

const app = express();

app.get('/',(req,res)=>{
    res.send("crud application");
})
app.listen(3000 , ()=>{console.log(`crud running in http://localhost:3000`)});