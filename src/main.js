import { useState } from "react";

import {useSelector , useDispatch} from 'react-redux'
import { karo } from "./action/action";

import { useHistory } from "react-router";



function Todo(){
    const d=useHistory()

    const dispatch=useDispatch()

    const mystate =useSelector (state => state.tajmahal);


    const a=mystate.list

const [data,setdata]=useState('')


function add(){
 
    dispatch(karo(data))
 
}
console.log(a)


function logout(){

    localStorage.clear();

         d.push('/')
      
    


}
   

    return(
        <>
        <button onClick={logout}>logout</button>
          <div className='maindiv'>
          <input className='todo' onChange={(e)=>setdata(e.target.value)}  />
           <button className='cb' onClick={add}>ADD TODO</button>

           <div>
               {a.map(function(el){
              
                return(

                    <h4 className='lis'>{el}</h4>
                )
              


               })}
           </div>

           </div>


          
        </>
    )
}


export default Todo