
import React,{useState} from "react";
import axios from 'axios'
import './App.css'

const Cripto = ()=>{
  const   [cripto, setCripto] = useState('')
  
  return (
    <div id ="abc">
        <input id="a" value={cripto} onChange={(e)=> setCripto(e.target.value)}
         ></input>
        <button  id="b" onClick={()=> { 
           axios.get('https://api.coincap.io/v2/rates/'+cripto)
           .then((res)=> setCripto(res.data.data))
         }}>get cripto</button>
       <p className="ab"> "crypto symbol " :  {cripto.symbol} </p>  
       <p className="ab"> "current price " :  ${cripto.rateUsd} </p>
       </div>
  )

}
export default Cripto