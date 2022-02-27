import React from 'react';
import Details from './components/sections/Details';
import Gallery from './components/sections/Gallery';
import './App.css' 
// Layouts

// Views 
import Earth from './pages/Globe/Earth';
import Heritage from './components/HeritageSite';


const App = () => {

  return (
    <div>
    {/* <Earth />  */}
    {/* <Gallery country="Lithuania" />  */}
      <Details  />
    </div>
  );
}

export default App;