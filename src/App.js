import React from 'react';
import Testimonial from './components/sections/Testimonial';
import Gallery from './pages/Gallery';
import MainPage from "./pages";
import {
  Route,
  Switch,
  Link,
  Redirect
} from "react-router-dom";

// Layouts

// Views 
import Earth from './pages/Globe/Earth';
import Heritage from './components/HeritageSite';


const App = () => {

  return (
    <Switch>
       {/* <Earth /> 
       <Testimonial  /> */}
       {/* <Route path="/" component={Gallery} /> */}
       {/* <Route path="/" component={MainPage} />  */}
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