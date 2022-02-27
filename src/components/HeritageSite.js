import React from "react";



const Heritage = (props) => {
  console.log(props.name)
  return(
  <div onClick={() => window.location.href='/Gallery?query='+props.id}>
    <h1>{props.name}</h1>
    <img src={props.image} />
    <p>{props.image}</p>
    {/* <title>{props.name} </title>  */}
  </div>
);
}

export default Heritage;

