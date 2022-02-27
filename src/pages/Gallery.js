import React, { useState, useEffect } from 'react';
import Heritage from '../components/HeritageSite';
import {useLocation} from "react-router-dom"
import "../Gallery.css"

let countryCode = sessionStorage.getItem('ISO');

const Gallery = (props) => {
  const [countries, setCountries] = useState({ features: []});
  
  const search = useLocation().search;
  const query = new URLSearchParams(search).get('query')

  useEffect(() => {
    fetch('http://159.65.88.66/hack/gallery?query='+query)
    .then(res => res.json())
    .then(setCountries)
    .catch(function(error) {
      console.log(error);
  });;
  }, []);


  let list = []

  Array.prototype.forEach.call(countries,country => {

    list.push(country)
  });

  console.log(list)

  // let CountryList=[];
  // countries.forEach((country,index)=> {
  //   CountryList.push(<Heritage></Heritage>)
  // })

  // console.log(countries);
  if (countries[0] === undefined){
    console.log("wtf is wrong")
  }
  else{
    return (
      <div className="gallery">
        {list.map(temp => 
        <Heritage 
          name={temp.name} 
          image={temp.image_url} 
          some_id={temp.id}  
        />)}
      </div>
      // <p>Hi</p>
    );  
  }
  return(<h1>fuck us </h1>)
}

export default Gallery;