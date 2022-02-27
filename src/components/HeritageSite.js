import React from "react";



const Heritage = (props) => {
  console.log(props.name)
  return(
  <div>
    <h1>{props.name}</h1>
    <img src={props.image} />
    
    <p>{props.key}</p>
  </div>
);
}

export default Heritage;

