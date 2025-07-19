import React from "react";
import SearchBar from "./SearchBar";
import LocationFilterList from "./LocationFilterList";

export default function SideBar({ search, onSearch, locations, setLocations }) {
  return (
    <aside style={{ width: "200px", background: "#aa8866", padding: "1rem" }}>
      <SearchBar value={search} onChange={onSearch} />
      <LocationFilterList locations={locations} setLocations={setLocations} />
    </aside>
  );
}