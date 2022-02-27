import React from "react";



const Heritage = (props) => {
  console.log(props.random)

  return(
  <div onClick={() => window.location.href='/Details?query='+props.id}>
    <h1>{props.name}</h1>
    <h1>{props.age}</h1>
    {/* <img src={props.image} /> */}
    {/* <p>{props.image}</p> */}
    {/* <p>{props.name}</p> */}
  </div>
);
}

export default Heritage;

