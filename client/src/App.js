import React from 'react'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import Home from './Screens/Home'
import Login from './Screens/Login'
 
function App() {
   return (
   <>
 
     
      <Switch>
         <Route exact path="/" component={Login} />
          <Route path="/home" component={Home}/>
           
            
      </Switch>
  
   </>
  );
}

export default App;