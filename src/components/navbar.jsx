import "./navbar.css";
import { Link } from "react-router-dom";

//Here goes the logic

function Navbar() {
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
          Catalog
        </Link>
        <Link className="nav-link-active" aria-current="page" to="/about">
          About
        </Link>
        <Link className="nav-link-active" aria-current="page" to="/admin">
          Admin
        </Link>
        <form className="d-flex" role="search">
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button className="btn btn-outline-success" type="submit">
            Search
          </button>
        </form>
      </div>
    </nav>
  );
}

//Here goes the export
export default Navbar;
