import React from "react";

export default function SearchBar({ value, onChange }) {
  return (
    <input
      style={{ width: "100%", marginBottom: "1rem" }}
      placeholder="Search"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
}