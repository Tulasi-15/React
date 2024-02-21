import { useParams } from "react-router-dom"
import { Link } from "react-router-dom";
import data from "./details.json"
// import lp from './imgs/mobile.jpeg'

export default function Category(){
    const {id} = useParams();
    return (
    <div className="App">
        {
            data[id].map(dat => (
                <Link style={{textDecoration: 'none'}} to={dat.name}>
                    <div className="category">
                        <img src={require (`${dat.imgadd}`)} alt="phones"/>
                        <div className="details"> 
                        <label>{dat.name}</label>
                        <h4>${dat.price}</h4>
                        </div>
                        <div className="description">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,  veniam, quis nostrud exercitation ullamco sse cillum dolore eu fugiat nulla pariatur
                        </div>
                    </div>
                </Link>
            ))
        }
    </div>
    )
}
