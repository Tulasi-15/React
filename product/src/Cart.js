import { useState } from "react"

let emptyArray = [];
export const addtocart = (val) => {
    var fl = true;
    for(var i = 0;i<emptyArray.length;i++){
        if(emptyArray[i][0]==val){
            emptyArray[i][1]++;
            fl = false;
        }
    }
    if(fl){
        emptyArray.push([val , 1]);
    }
    console.log(val +" added");
}
export default function Cart(){
    return( 
        <div className="tab">
            <b>CART</b>
            <table>
                <tr>
                    <th>Product</th>
                    <th>Quantity</th>
                </tr>
            {emptyArray.map(ol=>(
                <tr>
                    <td>{ol[0]}</td>
                    <td>{ol[1]}</td>
                </tr>
            ))}
            </table>
        </div>
    )
}
// module.exports = addtocart;