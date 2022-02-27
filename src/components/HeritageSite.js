import React from "react";



const Heritage = (props) => {
  console.log(props)
  return(
  <div class="heritage" onClick={() => window.location.href='/Details?query='+props.some_id} >
    <h3 class="center-content ">{props.name}</h3>
    <img src={props.image} />

  </div>
);
}

export default Heritage;

