import React from 'react';
import Testimonial from './components/sections/Testimonial';
import Gallery from './components/sections/Gallery';
import MainPage from "./pages";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect
} from "react-router-dom";

// Layouts

// Views 
import Earth from './pages/Globe/Earth';


const App = () => {

  return (
<<<<<<< HEAD
    <Router>
       {/* <Earth /> 
       <Gallery country="Lithuania" /> 
       <Testimonial  /> */}
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
  );
}

export default App;