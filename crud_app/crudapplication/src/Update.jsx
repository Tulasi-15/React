import axios from "axios";
import { useEffect, useState } from "react";
import { useParams , useNavigate } from "react-router-dom";

export default function Update(){
    const {id} = useParams();
    const navigate = useNavigate();
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [phone,setPhone] = useState("");
    const [education,setEdu] = useState("");

    useEffect(()=>{
        axios.get('http://localhost:8080/getUser/'+id)
        .then(res =>{
            // console.log("updated")
            const arr = res.data;
            setName(arr.name);
            setEmail(arr.email);
            setPhone(arr.phone);
            setEdu(arr.education);
        });
    },[])
    const handleSubmit =() =>{
        console.log("submited="+education +"-"+typeof(education))
        axios.post('http://localhost:8080/updateUser/'+id ,{name , email,phone,education})
        .then(res => navigate('/'))
        .catch(e=>{
            alert(`enter a valid ${e.response.data.mes}`);    
        });
    }

    return(
        <div className='Bg'>
            <div className="container1">
                <div className='Add_Box'>
                    <input type="text" placeholder="Name" value={name} onChange={(e)=>setName(e.target.value)}/>
                    <input type="text" placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                    <input type="text" placeholder="Phone" value={phone} onChange={(e)=>setPhone(e.target.value)}/>
                    <div>
                        <input type="radio" id="it" name="education" checked={education === 'it'} onChange={(e)=>setEdu(e.target.id)}/><label htmlFor="it">IT</label>
                        <input type="radio" id="cse" name="education" checked={education === 'cse'} onChange={(e)=>setEdu(e.target.id)}/><label htmlFor="cse">CSE</label>
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