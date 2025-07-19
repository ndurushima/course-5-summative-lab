import React, { useContext, useRef, useState } from "react";
import { CoffeeContext } from "../components/CoffeeContext";
import useFormField from "../components/UseFormField";
import NavBar from "../components/NavBar";

export default function AdminPortal() {
  const { coffees, updateCoffee } = useContext(CoffeeContext);

  const currentId = useRef("");

  const [name,   nameProps]   = useFormField("");
  const [desc,   descProps]   = useFormField("");
  const [origin, origProps]   = useFormField("");
  const [price,  priceProps]  = useFormField("");

  const [msg, setMsg] = useState("");

  function handleSelect(e) {
    const id = e.target.value;
    currentId.current = id;
    const c = coffees.find(c => c.id.toString() === id);
    if (!c) return;
    nameProps.onChange({ target: { value: c.name } });
    descProps.onChange({ target: { value: c.description } });
    origProps.onChange({ target: { value: c.origin } });
    priceProps.onChange({ target: { value: c.price.toString() } });
    setMsg("");
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!currentId.current) {
      setMsg("⚠️ Please select a coffee above");
      return;
    }
    updateCoffee(currentId.current, {
      name,
      description: desc,
      origin,
      price: parseFloat(price),
    });
    setMsg("✅ Updated!");
  }

  return (
    <>
    <div>
          <NavBar />
    </div>
    <div className="form-container">
        <div className="form-card">
             <h1 style={{ textAlign: "center", marginBottom: "1.5rem" }}>
                Admin Portal
            </h1>
                    <div style={{ marginBottom: "1.5rem" }}>
                        <label
                            htmlFor="coffee-select"
                            style={{ display: "block", marginBottom: "0.5rem" }}
                        >
                            Pick a coffee to edit
                        </label>
                        <select
                            id="coffee-select"
                            onChange={handleSelect}
                            style={{
                                width: "100%",
                                padding: "0.6rem",
                                borderRadius: 4,
                                border: "1px solid #ccc",
                            }}
                        >
                            <option value="">— Select —</option>
                            {coffees.map((c) => (
                                <option key={c.id} value={c.id}>
                                    {c.name}
                                </option>
                            ))}
                        </select>
                    </div>

                    <form onSubmit={handleSubmit}>
                        <div style={{ marginBottom: "1rem" }}>
                            <label htmlFor={nameProps.id}>Coffee Name</label>
                            <input
                                {...nameProps}
                                placeholder="Type here"
                                />
                        </div>

                        <div style={{ marginBottom: "1rem" }}>
                            <label htmlFor={descProps.id}>Description</label>
                            <input
                                {...descProps}
                                placeholder="Type here"
                                />
                        </div>

                        <div style={{ marginBottom: "1rem" }}>
                            <label htmlFor={origProps.id}>Origin</label>
                            <input
                                {...origProps}
                                placeholder="Type here"
                                />
                        </div>

                        <div style={{ marginBottom: "1rem" }}>
                            <label htmlFor={priceProps.id}>Price</label>
                            <input
                                {...priceProps}
                                placeholder="Type here"
                                type="number"
                                step="0.01"
                                />
                        </div>

                        {msg && (
                            <p
                                style={{
                                    color: msg.startsWith("✅") ? "#8fbc8f" : "#f08080",
                                    marginBottom: "1rem",
                                }}
                            >
                                {msg}
                            </p>
                        )}

                        <button
                            className="submit-button"
                            type="submit"
                        >
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </>
  );
}
