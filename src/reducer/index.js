
import { combineReducers,applyMiddleware } from "redux";
import tajmahal from "./updown";




const rootreducer=combineReducers({tajmahal});


const middle=(store)=>(next)=>(action)=>{

  
    var check = JSON.parse( localStorage.getItem('token') );
    console.log(check)

    if(check!=null){

 return next(action)
    }else{

    console.log("ples login")

    }



}



export default rootreducer
export {middle};