import React, { useState, useContext } from "react";
import { CoffeeContext } from "../components/CoffeeContext";
import NavBar from "../components/NavBar";
import SideBar from "../components/SideBar";
import ProductGrid from "../components/ProductGrid";

export default function Shop() {
  const { coffees } = useContext(CoffeeContext);
  const [search, setSearch]   = useState("");
  const [locations, setLocations] = useState([]);

  const filtered = coffees.filter((c) =>
    c.name.toLowerCase().includes(search.toLowerCase()) &&
    (locations.length === 0 || locations.includes(c.location))
  );

  return (
    <div className="shop-page">
      <NavBar />
      <div className="shop-content">
        <aside className="shop-sidebar">
          <SideBar
            search={search}
            onSearch={setSearch}
            locations={locations}
            setLocations={setLocations}
          />
        </aside>
        <section className="shop-products">
          <ProductGrid coffees={filtered} />
        </section>
      </div>
    </div>
  );
}
