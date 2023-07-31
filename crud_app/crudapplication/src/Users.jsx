import { useState } from "react"
import { Link } from "react-router-dom";

export default function Users(){
    const [user , setUser] = useState([{name:"Mac",email:"mac0159@gmail.com",phone:"7358444869",education:"IT"}]);
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
                                <button>delete</button> 
                            </td>
                        </tr>
                    ))}

                </table>
            </div>
        </div>
    )
}