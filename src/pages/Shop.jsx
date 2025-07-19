import React, { useState, useContext } from "react";
import { CoffeeContext } from "../components/CoffeeContext";
import NavBar from "../components/NavBar";
import SideBar from "../components/SideBar";
import ProductGrid from "../components/ProductGrid";

export default function Shop() {
  const { coffees } = useContext(CoffeeContext);
  const [search, setSearch] = useState("");
  const [locations, setLocations] = useState([]);

  const filtered = coffees.filter((c) => {
    return (
      c.name.toLowerCase().includes(search.toLowerCase()) &&
      (locations.length === 0 || locations.includes(c.location))
    );
  });

  return (
    <div>
        <NavBar />
        <aside>
        <SideBar
        search={search}
        onSearch={setSearch}
        locations={locations}
        setLocations={setLocations}
      />
        </aside>
      <ProductGrid coffees={filtered} />
    </div>
  );
}
