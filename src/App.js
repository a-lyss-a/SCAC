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
<<<<<<< HEAD
<<<<<<< HEAD
    <Router>
=======
    <Switch>
>>>>>>> withRouter
       {/* <Earth /> 
       <Testimonial  /> */}
<<<<<<< HEAD
      <Route path="/" component={MainPage} />
      <Route path="/Globe/Earth"component={Earth} />
    </Router>
=======
    <div>
    {/* <Earth />  */}
    {/* <Gallery country="Lithuania" />  */}
      <Testimonial  />
    </div>
>>>>>>> fca6118a9aa3d562c2bdd391e9b3bbe56105ed71
=======
       {/* <Route path="/" component={Gallery} /> */}
       {/* <Route path="/" component={MainPage} />  */}
      <Route  path="/Globe/Earth">
      <Earth /> 
      </Route>
      <Route  path="/Gallery">
      <Gallery /> 
      </Route> 
       
    </Switch>

>>>>>>> withRouter
  );
}

export default App;