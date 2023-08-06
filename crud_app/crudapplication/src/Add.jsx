import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
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
            toast.warn(`enter a valid ${e.response.data.mes}`, {
                position: toast.POSITION.TOP_CENTER
              });
             
        });
    }

    return(
        <div className='Bg'>
            <ToastContainer/>
            <div className="container1">
                <div className='Add_Box'>
                    <input type="text" placeholder="Name" onChange={(e)=>setName(e.target.value)}/>
                    <input type="text" placeholder="Email" onChange={(e)=>setEmail(e.target.value)}/>
                    <input type="text" placeholder="Phone"onChange={(e)=>setPhone(e.target.value)}/>
                    <div>
                        <input type="radio" id="it" name="education" onChange={(e)=>setEdu(e.target.id)}/><label htmlFor="it">IT</label>
                        <input type="radio" id="cse" name="education"  onChange={(e)=>setEdu(e.target.id)}/><label htmlFor="cse">CSE</label>
                        <input type="radio" id="eee" name="education" checked={education === 'eee'} onChange={(e)=>setEdu(e.target.id)}/><label htmlFor="eee">EEE</label>
                        <input type="radio" id="mech" name="education" checked={education === 'mech'} onChange={(e)=>setEdu(e.target.id)}/><label htmlFor="mech">MECH</label>
                        <input type="radio" id="ece" name="education" checked={education === 'ece'} onChange={(e)=>setEdu(e.target.id)}/><label htmlFor="ece">ECE</label>
                    </div>
                    <button onClick={handleSubmit}>Submit</button>
                </div>
            </div>
        </div>
    )
}