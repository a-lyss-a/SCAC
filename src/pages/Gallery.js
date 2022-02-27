import React, { useState, useEffect } from 'react';
import Heritage from '../components/HeritageSite';
import {useLocation} from "react-router-dom"

let countryCode = sessionStorage.getItem('ISO');

const Gallery = (props) => {
  const [countries, setCountries] = useState({ features: []});
  
  const search = useLocation().search;
  const query = new URLSearchParams(search).get('query')

  console.log('http://159.65.88.66/hack/gallery?query='+query)
  console.log(query)

  useEffect(() => {
    fetch('http://159.65.88.66/hack/gallery?query='+query)
    .then(res => res.json())
    .then(setCountries)
    .catch(function(error) {
      console.log(error);
  });;
  }, []);

  

  const list = []

  Array.prototype.forEach.call(countries, country => {
    list.push(
    <Heritage 
      name={country.name}
      image={country.image_url} 

    />)
  });

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
      <div>
        {list.map(temp => <Heritage name={temp.props.name} image={temp.props.image}></Heritage>)}
      </div>
      // <p>Hi</p>
    );  
  }
  return(<h1>fuck us </h1>)
}

export default Gallery;