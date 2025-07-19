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

  function updateCoffee(id, updates) {
    return fetch(`${baseUrl}/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updates),
    })
      .then((r) => {
        if (!r.ok) throw new Error("Network error");
        return r.json();
      })
      .then((updated) => {
        setCoffees((prev) =>
          prev.map((c) => (c.id.toString() === id.toString() ? updated : c))
        );
        return updated;
      });
  }

  return (
    <CoffeeContext.Provider value={{ coffees, updateCoffee }}>
      {children}
    </CoffeeContext.Provider>
  );
}
