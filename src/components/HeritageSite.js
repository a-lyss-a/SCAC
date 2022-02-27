import React from "react";



const Heritage = (props) => {
  console.log(props)
  return(
  <div onClick={() => window.location.href='/Details?query='+props.some_id} className="heritage">
    <h3>{props.name}</h3>
    <img src={props.image} />

  </div>
);
}

export default Heritage;

