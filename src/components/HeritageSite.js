import React from "react";



const Heritage = (props) => {
  console.log(props.name)
  return(
  <div>
    <h1>{props.name}</h1>
    <img src={props.image} />
    <p>{props.image}</p>
    {/* <title>{props.name} </title>  */}
  </div>
);
}

export default Heritage;

