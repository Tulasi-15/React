import { Link, useParams } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import data from './products.json';
import {addtocart} from './Cart.js'
// import Cart from "./Cart.js";

export default function Product(){
    const {id} = useParams();
    // const handleAddToCart = () => {
    //     addtocart(1,9);
    //   }
    // addtocart("me" , 9);

    // console.log(data[id].name);
    return(
        <div className="prod">
           <div className="pic">
           <div id="carouselExampleInterval" class="carousel slide siz" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active" data-bs-interval="10000">
      <img src={require(`${data[id].img1}`)} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item" data-bs-interval="2000">
      <img src={require(`${data[id].img2}`)} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={require(`${data[id].img3}`)} class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
           </div>
           <div className=" detals">
                <div className="details"> 
                    <h1>{id}</h1>
                    <h4>{data[id].price}</h4>
                </div>
                <div className="des">
                    <div>
                        <h2>Description</h2>
                        <p>{data[id].des}</p>
                    </div>
                    <div>
                        <h2>Specification</h2>    
                        <ul>
                            {data[id].spec.map(temp => (
                                <li>{temp}</li>
                            ))}
                        </ul>

                    </div>
                    <div>
                    <button type="button" class="btn btn-primary" onClick={()=>addtocart(id)}>Add to cart</button>
                    <Link to='/cart'>
                    <button type="button" class="btn btn-success">Cart</button>
                    </Link>
                    </div>
                </div>

           </div>
        </div>
    )
}