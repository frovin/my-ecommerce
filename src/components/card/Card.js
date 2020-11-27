import React from "react";
import "../../styles/Card.scss";

function Card() {
  return (
    <div className="container">
      <div className="card mb-3 mt-5">
        <div className="row no-gutters">
          <div className="col-md-4">
            <img
              src="../../images/eb83be580847bcdc4c8f403c8085d3c8.jpg"
              className="card-img"
              alt="..."
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">Nombre del producto</h5>
              <p className="card-text">
                Descripcion del producto
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
