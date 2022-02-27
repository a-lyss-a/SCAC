import React from 'react';
import Gallery from './pages/Gallery';
import MainPage from "./pages";
import {
  Route,
  Switch,
  Link,
  Redirect
} from "react-router-dom";

import Details from './components/sections/Details';


// Layouts

// Views 
import Earth from './pages/Globe/Earth';


const App = () => {

  return (
    <Switch>
       {/* <Route path="/" component={Gallery} /> */}
       {/* <Route path="/" component={MainPage} />  */}
       <Route  path="/Details">
      <Details /> 
      </Route>
      <Route  path="/Globe/Earth">
      <Earth /> 
      </Route>
      <Route  path="/Gallery">
      <Gallery /> 
      </Route> 
       
    </Switch>

  );
}

export default App;