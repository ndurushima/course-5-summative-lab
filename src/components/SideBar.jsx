import React from "react";
import SearchBar from "./SearchBar";
import LocationFilterList from "./LocationFilterList";

export default function SideBar({ search, onSearch, locations, setLocations }) {
  return (
    <aside>
      <SearchBar value={search} onChange={onSearch} />
      <LocationFilterList locations={locations} setLocations={setLocations} />
    </aside>
  );
}