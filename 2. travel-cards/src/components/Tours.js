import React from "react";
import Card from "./Card";

const Tours = ({ tours, removeCard }) => {
  return (
    <div className="container">
      <div>
        <h2 className="title">Travel Trips</h2>
      </div>
      <div className="cards">
        {tours.map((tour) => {
          return <Card key={tour.id} {...tour} removeCard={removeCard} />;
        })}
      </div>
    </div>
  );
};

export default Tours;
