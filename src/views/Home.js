import React from "react";
import Card from "../components/card/Card";
import FeaturedCard from "../components/featured-card";
import Jumbotron from "../components/jumbotron";
import Navbar from "../components/navbar";

function Home() {
  return (
    <div>
      <Navbar />
      <Jumbotron />
      <h1 className="d-flex justify-content-center">
          Encuentra aqui tus productos favoritos
      </h1>
      <FeaturedCard />
      <Card />
    </div>
  );
}

export default Home;
