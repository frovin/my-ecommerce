import React from "react";
import '../../styles/RandomCard.scss';

function RandomCard() {
  return (
    <div className="card"  id='rcBody'>
      <img src="..." className="card-img-top" />
      <div className="card-body">
        <p className="card-text">
          Titulo
        </p>
      </div>
    </div>
  );
}

export default RandomCard;