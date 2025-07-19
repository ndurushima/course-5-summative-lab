import React, { useContext } from "react";
import NavBar from "../components/NavBar";
import Sidebar from "../components/SideBar";
import CoffeeList from "../components/CoffeeList";
import { CoffeeContext } from "../components/CoffeeContext";

function Shop() {
    const { coffees } = useContext(CoffeeContext)
    return (
        <>
        <NavBar />
        <Sidebar />
        <CoffeeList coffees={coffees}/>
        </>
    )
}

export default Shop