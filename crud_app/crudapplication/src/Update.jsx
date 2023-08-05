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
            console.log("updated")
            const arr = res.data;
            setName(arr.name);
            setEmail(arr.email);
            setPhone(arr.phone);
            setEdu(arr.education);
        });
    },[])
    const handleSubmit =() =>{
        console.log("submited")
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
                    <input type="text" placeholder="Education" value={education} onChange={(e)=>setEdu(e.target.value)}/>
                    <button onClick={handleSubmit}>Submit</button>
                </div>
            </div>
        </div>
    )
}