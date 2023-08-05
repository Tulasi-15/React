import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
export default function Add(){
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [phone,setPhone] = useState("");
    const [education,setEdu] = useState("");
    const navi = useNavigate();
    const handleSubmit = () =>{
        axios.post('http://localhost:8080/createUser',{name,email,phone,education})
        .then(e =>{
            navi('/');
        })
        .catch(e => {
            // console.log(e.response.data.mes)
            alert(`enter a valid ${e.response.data.mes}`);    
        });
    }

    return(
        <div className='Bg'>
            <div className="container1">
                <div className='Add_Box'>
                    <input type="text" placeholder="Name" onChange={(e)=>setName(e.target.value)}/>
                    <input type="text" placeholder="Email" onChange={(e)=>setEmail(e.target.value)}/>
                    <input type="text" placeholder="Phone"onChange={(e)=>setPhone(e.target.value)}/>
                    <input type="text" placeholder="Education"onChange={(e)=>setEdu(e.target.value)}/>
                    <button onClick={handleSubmit}>Submit</button>
                </div>
            </div>
        </div>
    )
}