import React from "react";
import SearchBar from "./SearchBar";

export default function Sidebar({ search, onSearch }) {
  return (
    <aside style={{ width: 200, padding: "1rem", background: "#f5f5f5" }}>
      <SearchBar value={search} onChange={onSearch} />
    </aside>
  );
}