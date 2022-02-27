import React from 'react';
<<<<<<< HEAD
import Testimonial from './components/sections/Testimonial';
import Gallery from './pages/Gallery';
import MainPage from "./pages";
import {
  Route,
  Switch,
  Link,
  Redirect
} from "react-router-dom";
=======
import Details from './components/sections/Details';
import Gallery from './components/sections/Gallery';
>>>>>>> e6e01048527cdf5de58579192f7410d3bcdf140d

// Layouts

// Views 
import Earth from './pages/Globe/Earth';
import Heritage from './components/HeritageSite';


const App = () => {

  return (
<<<<<<< HEAD
    <Switch>
       {/* <Route path="/" component={Gallery} /> */}
       {/* <Route path="/" component={MainPage} />  */}
      <Route  path="/Globe/Earth">
      <Earth /> 
      </Route>
      <Route  path="/Gallery">
      <Gallery /> 
      </Route> 
       
    </Switch>

=======
    <div>
    {/* <Earth />  */}
    {/* <Gallery country="Lithuania" />  */}
      <Details  />
    </div>
>>>>>>> e6e01048527cdf5de58579192f7410d3bcdf140d
  );
}

export default App;