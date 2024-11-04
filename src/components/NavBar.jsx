import { Link } from "react-router-dom";
import logo from "../assets/burgerKinglogo.svg";

export const NavBar = () => {
  return (
    <>
      <nav className="navbar">
        <div className="logo">
          <img src={logo} alt="Burger King Logo" />
        </div>
        <ul className="navlinks-1">
          <Link to="/order">Order</Link>
          <Link to="/menu">Menu</Link>
          <Link to="#">Offer</Link>
          <Link to="#">Restaurants</Link>
          <Link to="#">Careers</Link>
          <Link to="#">News</Link>
        </ul>
      </nav>
    </>
  );
};