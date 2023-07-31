import axios from 'axios';
import { useState } from 'react';
export default function Add(){
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [phone,setPhone] = useState("");
    const [education,setEdu] = useState("");
    const handleSubmit = () =>{
        axios.post('http://localhost:8080/createUser',{name,email,phone,education})
        .then(e => console.log(e))
        .catch(e => console.log("error"));
        console.log("submited");
    }

    return(
        <div className="container">
            <input type="text" placeholder="Name" onChange={(e)=>setName(e.target.value)}/>
            <input type="text" placeholder="Email" onChange={(e)=>setEmail(e.target.value)}/>
            <input type="text" placeholder="Phone"onChange={(e)=>setPhone(e.target.value)}/>
            <input type="text" placeholder="Education"onChange={(e)=>setEdu(e.target.value)}/>
            <button onClick={handleSubmit}>Submit</button>
        </div>
    )
}