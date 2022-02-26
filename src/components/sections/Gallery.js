import React, { useState, useEffect } from 'react';



const Gallery = (props) => {
  // const [countries, setCountries] = useState({ features: []});
  
  useEffect(() => {
    fetch("http://localhost:5000/gallery?query=ru").then(res => res.json()).then(data => console.log(data)).catch(function(error) {
      console.log(error);
  });;
  }, []);


  return (
    <section>
      {props.country}

    </section>
  );
}

export default Gallery;