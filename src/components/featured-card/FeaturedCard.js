import React from "react";
import RandomCard from "../random-card";
import '../../styles/FeaturedCard.scss';

function FeaturedCard() {
  return (
    <div className="card text-center">
      <div className="card-header">Categorias</div>
      <div id="rcContainer">
        <RandomCard />
        <RandomCard />
        <RandomCard />
        <RandomCard />
        <RandomCard />
        <RandomCard />
      </div>
    </div>
  );
}

export default FeaturedCard;
