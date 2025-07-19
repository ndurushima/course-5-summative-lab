import React from "react";

function CoffeeCard({ coffee }) {
  const { name, description, origin, price } = coffee;

  return (
    <li className="card" data-testid="coffee-item">
      <h4>{name}</h4>
      <p>{description}</p>
      <p>Origin: {origin}</p>
      <p>Price: ${price}</p>
    </li>
  );
}

export default CoffeeCard;

