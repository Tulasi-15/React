import { useState } from "react";
export default function Update(){
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [phone,setPhone] = useState("");
    const [education,setEdu] = useState("");
    return(
        <div className='Bg'>
            <div className="container1">
                <div className='Add_Box'>
                    <input type="text" placeholder="Name" onChange={(e)=>setName(e.target.value)}/>
                    <input type="text" placeholder="Email" onChange={(e)=>setEmail(e.target.value)}/>
                    <input type="text" placeholder="Phone"onChange={(e)=>setPhone(e.target.value)}/>
                    <input type="text" placeholder="Education"onChange={(e)=>setEdu(e.target.value)}/>
                    <button>Submit</button>
                </div>
            </div>
        </div>
    )
}