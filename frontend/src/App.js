import React from 'react';
import Gallery from './pages/Gallery';
import MainPage from "./pages";
import {
  Route,
  Switch,
  Link,
  Redirect
} from "react-router-dom";
import './App.css';

import Details from './components/sections/Details';

// Layouts

// Views 
import Earth from './components/Globe/Earth';
import Heritage from './components/HeritageSite';


const App = () => {

  return (

    <Switch>
       {/* <Route path="/" component={Gallery} /> */}
       {/* <Route path="/" component={MainPage} />  */}
       <Redirect exact from="/" to="/Globe/Earth"/>
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