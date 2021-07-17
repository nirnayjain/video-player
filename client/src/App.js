import React from 'react'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import Home from './Screens/Home'
import Movies from './Screens/Movies'
import Nav from './Components/Nav'
 
function App() {
   return (
   <>
 
    <Nav /> 
      <Switch>
         <Route exact path="/" component={Home} />
          <Route path="/movies" component={Movies}/>
           
            
      </Switch>
  
   </>
  );
}

export default App;