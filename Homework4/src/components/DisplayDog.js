import React from "react";

const DisplayDog = props => {
  return (
    <div className="card">
        <div className="displayDogTitle">
            <h2>{props.title}</h2>
        </div>
      <img src={props.image}/>
    </div>
  );
};

export default DisplayDog;