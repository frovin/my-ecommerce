import React from "react";
import { Link } from "react-router-dom";

function Jumbotron() {
  return (
    <div className="jumbotron jumbotron-fluid">
      <div className="container">
        <h1 className="display-4 d-flex justify-content-center">Aprovecha los descuentos de Black Friday</h1>
        <p className="lead d-flex justify-content-center">
          Descuentos en productos seleccionados de distintas categorias.
        </p>
        <p className="lead d-flex justify-content-center">
        <Link to="/store">Ver catalogo completo</Link>
        </p>
      </div>
    </div>
  );
}

export default Jumbotron;
