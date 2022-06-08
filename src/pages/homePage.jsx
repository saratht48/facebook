import {React,useState} from "react";
import '../main.css'
import Postlist from '../components/Postlist'
import Middlesection from '../components/Middlesection'
import axios from 'axios';
import { FaRegTimesCircle } from 'react-icons/fa'
import { FaRegImage } from 'react-icons/fa'










const Homepage=()=>{
    const[text,setText]=useState('')
    const[disable,setDisable]=useState(true)
    const[show,setShow]=useState(false)
    const[gifdata,setGifdata]=useState('')
    const[datas,setDatas]=useState([])
    const[gifs,setGifs]=useState(false)
    const[gifimage,setGifimage]=useState('')
    const[objarray,setObjarray]=useState([])
    
    
    const onchange=(e)=>{
        const value=e.target.value
        if(value.length>0){
            setDisable(false)
        

        }
        setText(value)
        console.log(text); 

        
    }
   
    const clicked=()=>{
        debugger
           if(show===true){
               setShow(false)
           }else{
            setShow(true)
            console.log(show);
            axios({
       
                method: 'get',
                url:`https://api.giphy.com/v1/gifs/trending?api_key=ZIPyJ2Rql5pmqEnHJkJ5oGkViPeJs2TR&limit=5`,
                headers: {'content-type':'application/json'}
              }).then((response) => {
                  console.log('hhshshs');
              console.log(response.data.data)
              setDatas(response.data.data)  
            }); 

           }
           
           

           

           
          
    
           
    }
    const load=(event)=>{
        setShow(false)
        setGifs(true)
        setGifimage(event)        
    }
   
    const post=()=>{

         
        const obj={
            text,
            gifimage,
        }   
        
        setObjarray([...objarray,obj])
        setText('')
        setGifimage('')
        setGifs(false)  
        

    }
    const showgif=(e)=>{
        const value=e.currentTarget.value;
        setGifdata(value)
        console.log(gifdata)
        axios({
       
            method: 'get',
            url:`https://api.giphy.com/v1/gifs/search?api_key=ZIPyJ2Rql5pmqEnHJkJ5oGkViPeJs2TR&limit=5&q=${gifdata}`,
            headers: {'content-type':'application/json'}
          }).then((response) => {
          console.log(response.data.data)
          setDatas(response.data.data)
          

           
          
          
          
        });

    }
    
    
    return(
        <div className="d-flex ">
        <div className="box">
        {
            show && (<div className="position p-2">
              
                <div className="col-12 px-0">
                <input type="text" className="figure" value={gifdata} placeholder="Search for GIF" onChange={showgif} autoFocus ></input>
                </div>
                <div className="col-12 mt-3 px-0">
                <div style={{width:"95%",margin:"0px auto",overflow:"hidden",height:"400px"}}>
                {
                    datas.map((item,index)=>{
                        return(
                            <div className="imagecover" key={index}>
                               <img src={item.images.downsized.url} alt="gif" onClick={()=>load(item.images.downsized.url)}></img> 
                            </div>
                        )

                    })

                }
                </div>
                
                </div>

            
             

            
            
            
            
            </div>)
        }
        <div className="top-box mt-2">
        <h1 className="contents"> <span className="iconphoto" style={{left:"-18px"}}><FaRegImage /></span>Compose Post</h1>
        <h1 className="contents"><span className="iconphoto"><FaRegImage /></span>Phots/Video Album</h1>
        <h1 className="contents" style={{marginLeft:"0px"}}>Live Video</h1>
        <div className="icon1">
        < FaRegTimesCircle  />
        </div>

        </div>
        <div className="contentbox">
        <div className="user"></div>
        <div className="text-area">
        <textarea className="form-control" value={text} onChange={onchange} placeholder="Write Some thing here"  rows="4" cols="50"></textarea>
        </div>


        </div>
        { gifs && (
        <div className="gif mb-3">
           <img src={gifimage}></img>
        
        </div>)
        }
        <Middlesection clicked={clicked}/>

        <div  className="displayflex mt-1" style={{backgroundColor:"#EFEFEF"}}>
        <button className="btn button px-0 mt-2">Only Me</button>
        <button className="btn buttonpost px-0 mt-2" onClick={post} disabled={disable}>Post</button>
        
        
        </div>

        </div>
        { objarray.length>0 && (
        <div>
        <Postlist objarray={objarray}/>
        
        </div>)
        }
       
        
        </div>
    )
}
export default Homepage