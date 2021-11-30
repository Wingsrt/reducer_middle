const ini={
 
    list:[]
  

}


 
const  tajmahal=(state=ini,action)=>{


    switch (action.type) {
        case 'INC':{
          
            return{
                ...state,
                list:[...state.list,action.payload]
            }
           

           
        }
            


        default:return state
        
    
      
    }


    






}

export default tajmahal