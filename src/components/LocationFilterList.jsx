import React from "react";
import LocationCheckbox from "./LocationCheckbox";

const ALL_LOCS = ["Location 1", "Location 2", "Location 3", "Location 4"];

export default function LocationFilterList({ locations, setLocations }) {
  function toggle(loc) {
    setLocations((prev) =>
      prev.includes(loc)
        ? prev.filter((x) => x !== loc)
        : [...prev, loc]
    );
  }

  return (
    <div>
      {ALL_LOCS.map((loc) => (
        <LocationCheckbox
          key={loc}
          label={loc}
          checked={locations.includes(loc)}
          onToggle={() => toggle(loc)}
        />
      ))}
    </div>
  );
}
