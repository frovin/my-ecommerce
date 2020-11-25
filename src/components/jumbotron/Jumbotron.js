import React from "react";

function Jumbotron() {
  return (
    <div className="jumbotron jumbotron-fluid">
      <div className="container">
        <h1 className="display-4 d-flex justify-content-center">Fluid jumbotron</h1>
        <p className="lead d-flex justify-content-center">
          This is a modified jumbotron that occupies the entire horizontal space
          of its parent.
        </p>
      </div>
    </div>
  );
}

export default Jumbotron;
