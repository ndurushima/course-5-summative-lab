import React from "react";
import CoffeeCard from "./CoffeeCard";

function CoffeeList({ coffees }) {
  return (
    <ul className="cards" data-testid="coffee-list">
      {coffees.map((coffee) => (
        <CoffeeCard key={coffee.id} coffee={coffee} />
      ))}
    </ul>
  );
}

export default CoffeeList;
