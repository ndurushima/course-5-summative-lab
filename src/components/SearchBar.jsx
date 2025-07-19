import React from "react";

export default function SearchBar({ value, onChange }) {
  return (
    <input
      className="searchbar"
      placeholder="Search"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
}