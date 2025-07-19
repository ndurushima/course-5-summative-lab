import { NavLink } from "react-router-dom";
import './NavBar.css'

function NavBar() {
  return (
    <nav className="navbar">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/shop">Shop</NavLink>
      <NavLink to="/adminPortal">Admin Portal</NavLink>
    </nav>
  );
}

export default NavBar;