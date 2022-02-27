import React, { useState, useEffect } from 'react';



const Gallery = (props) => {
  // const [countries, setCountries] = useState({ features: []});
  
  useEffect(() => {
    fetch("http://159.65.88.66/hack/gallery?query=ru")
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(function(error) {
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