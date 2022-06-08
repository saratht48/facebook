import {React,useState} from "react";
import { FaRegCalendarAlt } from 'react-icons/fa'
import { FaStamp } from 'react-icons/fa'
import "../main.css"

import { FaSurprise } from 'react-icons/fa'

const Middlesection=({clicked})=>{
     return(
        <div className="row mx-0">
        <div className="col-md-6 col-12 px-0 mb-2">
        <div className="innerbox">
     
        <h1 className="content"><span className="icontwo"><    FaStamp/></span>Tag Friends</h1>
        </div>
        </div>
        <div className="col-md-6 col-12 px-0 mb-2">
        <div className="innerbox">
        <h1 className="content"><span className="icontwo">< FaRegCalendarAlt/></span>Check In</h1>
        </div>
        </div>
        <div className="col-md-6 col-12 px-0 mb-2">
        <div className="innerbox">
        <h1 className="content" onClick={clicked}><span className="icontwo gifs">< FaSurprise/></span>GIF</h1>
        </div>
        </div>
        <div className="col-md-6 col-12 px-0 mb-2">
        <div className="innerbox">
        <h1 className="content"><span className="icontwo">< FaRegCalendarAlt/></span>Tag Events</h1>
        </div>
        </div>
        </div>
     )
 }
 export default Middlesection