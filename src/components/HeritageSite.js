import React from "react";



const Heritage = (props) => {
  console.log(props)
  return(
  <div onClick={() => window.location.href='/Gallery?query='+props.id}>
    <h1>{props.name}</h1>
    <img src={props.image} />

  </div>
);
}

export default Heritage;

