import React from "react";

export default function LocationCheckbox({ label, checked, onToggle }) {
  return (
    <div>
      <label>
        <input type="checkbox" checked={checked} onChange={onToggle} />
        {label}
      </label>
    </div>
  );
}