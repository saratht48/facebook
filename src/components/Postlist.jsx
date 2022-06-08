import {React,useState} from "react"
import './postlist.css'
import Postitem from './Postitem'
const Postlist=({objarray})=>{
    return(
    
        <div className="postbox mt-5">
        { 
            objarray.map((item,index)=>{
                return(
                    <Postitem key={index} item={item}/>
                )
              
            })

        }
        
         
        
        </div>
        
    )
}
export default Postlist