import React from "react";

export default function SearchBar({ value, onChange }) {
  return (
    <input
      style={{ width: "100%", padding: "0.5rem" }}
      placeholder="Search coffees…"
      value={value}
      onChange={e => onChange(e.target.value)}
    />
  );
}