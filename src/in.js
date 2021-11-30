import { useState ,useEffect} from "react"

import {Switch,Links,Route,Redirect, Link} from 'react-router-dom'
import { useHistory } from "react-router-dom";
import {useSelector , useDispatch} from 'react-redux'
import { karo } from "./action/action";
import {axios}from 'axios'


function In(){

  const axios = require('axios');

    const mystate =useSelector (state => state.tajmahal);


    const a=mystate.list
   
    const dispatch = useDispatch()

    const change=useHistory()

   
  const [user,setuser]=useState('')
     function show(e){
        
      setuser(e.target.value)
       
     }

     const [apidata,setapidata]=useState([])

     function check(){

      const r=[]
      
      fetch('http://localhost:3000/login')
  .then(response => response.json())
  .then(data => setapidata(data));
         
        console.log(apidata)
     apidata.map(function(el){
       
      if(user==el.user){

        console.log("yes")

        var tok=Math.floor(Math.random() * 1000);

        var lo_data={tok:tok,user:el.user}
        localStorage.setItem('token',JSON.stringify(lo_data))

        change.push('/main')

      }
           
  

     })
     

     }

   
     
    
    return(
        
      <>
         <div className='login'>
           <h2 className='head'>LOGIN FORM</h2>
        <input className='inputlog' onChange={show}  placeHolder  />
        

  <button className='logbut' onClick={check} >click</button>


  </div>
        
    
    
     
        </>
    )
}


export default In