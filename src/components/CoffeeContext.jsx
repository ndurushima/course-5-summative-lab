import React, { createContext, useState, useEffect } from "react";

export const CoffeeContext = createContext();

export function CoffeeProvider({ children }) {
  const [coffees, setCoffees] = useState([]);
  const baseUrl = "http://localhost:3000/coffee";

  useEffect(() => {
    fetch(baseUrl)
      .then((r) => r.json())
      .then(setCoffees);
  }, []);

  //  POST new coffee
  function addCoffee(newCoffee) {
    fetch(baseUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newCoffee),
    })
      .then((r) => r.json())
      .then((saved) => setCoffees([...coffees, saved]));
  }

  //  PATCH existing coffee (admin)
  function updateCoffee(id, updates) {
    fetch(`${baseUrl}/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updates),
    })
      .then((r) => r.json())
      .then((saved) =>
        setCoffees(coffees.map((c) => (c.id === id ? saved : c)))
      );
  }

  return (
    <CoffeeContext.Provider value={{ coffees }}>
      {children}
    </CoffeeContext.Provider>
  );
}
