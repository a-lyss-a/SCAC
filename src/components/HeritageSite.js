import React from "react";



const Heritage = (props) => {
  console.log(props)
  return(
  <div>
    <h1>{props.name}</h1>
    <img src={props.image} />
    
    <p>{props.some_id}</p>
  </div>
);
}

export default Heritage;

