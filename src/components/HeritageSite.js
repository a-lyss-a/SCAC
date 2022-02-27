import React from "react";



const Heritage = (props) => {
  console.log(props)
  return(
  <div onClick={() => window.location.href='/Details?query='+props.some_id}>
    <h1>{props.name}</h1>
    <img src={props.image} />

  </div>
);
}

export default Heritage;

