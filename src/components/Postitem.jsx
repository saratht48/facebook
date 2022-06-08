import {React,useState} from "react";
import './postlist.css'
const Postitem=({item})=>{
    return(
        
        <div className="container mt-4">
        <div className="uppercontainer">
         <h1 style={{fontSize:"15px"}}>{item.text} </h1>
        </div>
        { item.gifimage &&
        (<div className="lowercontainer">
        <img src={item.gifimage} alt="image"/>

        </div>)
        }

        </div>
        
        
        
    )
}
export default Postitem