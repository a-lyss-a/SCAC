import React, { useState, useEffect } from 'react';
import Heritage from '../components/HeritageSite';



const Gallery = (props) => {
  const [countries, setCountries] = useState({ features: []});
  

  useEffect(() => {
    fetch("http://159.65.88.66/hack/gallery?query=ru")
    .then(res => res.json())
    .then(setCountries)
    .catch(function(error) {
      console.log(error);
  });;
  }, []);

  const handleCountry = (prevState) => {
    setCountries(prevState.map((country) => {
      image = country.image_url
      name = country.name
    }))
  }
  // console.log(countries);
  if (countries[0] === undefined){
    console.log("wtf is wrong")
  }
  else{
    return (
      <div>
        <Heritage
          {handleCountry}
        />
      </div>
    );  
  }
  return(<h1>fuck us </h1>)
}

export default Gallery;