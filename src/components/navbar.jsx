import "./navbar.css";
import { Link } from "react-router-dom";
import GlobalContext from "../store/globalContext";
import { useContext } from "react";

//Here goes the logic

function Navbar() {
  const user = useContext(GlobalContext).user;

  return (
    <nav className="navbar bg-body-tertiary">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          Smackin Smokin Salsa
        </Link>
        <Link className="nav-link-active" aria-current="page" to="/home">
          Home
        </Link>
        <Link className="nav-link-active" aria-current="page" to="/catalog">
          Salsa & Merch
        </Link>
        <Link className="nav-link-active" aria-current="page" to="/about">
          About
        </Link>
        <Link className="nav-link-active" aria-current="page" to="/admin">
          Admin
        </Link>
        <Link className="nav-link-active" aria-current="page" to="/contact">
          Contact Us
        </Link>
        <form className="d-flex" role="search">
          <button type="button" className="btn btn-outline-dark mx-2">
            <i class="fa-regular fa-user"></i>
            {user.name}
          </button>
          <Link to="/cart" className="btn btn-outline-dark">
            <i class="fa-solid fa-cart-shopping"></i>
            Cart
          </Link>
        </form>
      </div>
    </nav>
  );
}

//Here goes the export
export default Navbar;
