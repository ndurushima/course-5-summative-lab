import React from "react";
import CoffeeCard from "./CoffeeCard";

export default function ProductGrid({ coffees }) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(200px,1fr))",
        gap: "1rem",
        flexGrow: 1,
      }}
    >
      {coffees.map((c) => (
        <CoffeeCard key={c.id} coffee={c} />
      ))}
    </div>
  );
}
