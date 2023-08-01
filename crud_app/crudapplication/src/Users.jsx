import axios from "axios";
import { useState } from "react"
import { Link } from "react-router-dom";

export default function Users(){
    const [user , setUser] = useState([]);

    axios.get('http://localhost:8080/')
    .then(res => setUser(res.data));

    const handleDelete=(id)=>{
        axios.delete('http://localhost:8080/delete/'+id)
        .then(res => console.log("Deleted"+res));
    }

    return(
        <div className="container">
            <div className="head">
                <div>
                    USERS
                </div>
                <div>
                    <Link to='/createUser' ><button className="button">add</button></Link>
                </div>
            </div>
            <div className="table_container">
                <table>
                    <tr>
                        <th>name</th>
                        <th>email</th>
                        <th>phone</th>
                        <th>education</th>
                        <th>update/delete</th>
                    </tr>
                    {user.map((item)=>(
                        <tr>
                            <td>{item.name}</td>
                            <td>{item.email}</td>
                            <td>{item.phone}</td>
                            <td>{item.education}</td>
                            <td>
                                <button>update</button>
                                <button onClick={() => handleDelete(item._id)}>delete</button> 
                            </td>
                        </tr>
                    ))}

                </table>
            </div>
        </div>
    )
}