import { useState } from 'react';
import {Switch,Links,Route,Redirect, Link} from 'react-router-dom'
import In from './in';
import Todo from './main'

import './sty.css'



function App() {

  return (
   <>
     <Switch>
       <Route exact  path='/'  component={In}/>
     <Route  path='/main' component={Todo}/>

     </Switch>
    
</>

  );
}

export default App;
