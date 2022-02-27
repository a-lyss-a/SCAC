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
    <Router>
       {/* <Earth /> 
       <Testimonial  /> */}
       <Gallery  /> 
      <Route path="/" component={MainPage} />
      <Route path="/Globe/Earth" component={Earth} />
    </Router>
  );
}

export default App;