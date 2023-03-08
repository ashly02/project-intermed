import React from "react";


function Home(props) {
  return (
    <div>
      {props.label && <label>{props.label}</label>}
      <h2>{ props.name ? `Welcome - ${props.name}` : "Login please"}</h2>
    </div>
  );
}

export default Home;