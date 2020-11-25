import React from "react";
import "../../styles/Navbar.scss";
import { Link } from "react-router-dom";
import payload from "../../utils/payload";

function Navbar() {
  const user = payload();
  return (

    <div className="container">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" to="/">
          Placeholder
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        {user ? (
                    <div className="collapse navbar-collapse">
                    <ul className="navbar-nav">
                      <form className="form-inline">
                        <input
                          className="form-control mr-sm-2"
                          type="search"
                          placeholder="Search"
                          aria-label="Search"
                        />
                        <button
                          className="btn btn-outline-success my-2 my-sm-0"
                          type="submit"
                        >
                          Search
                        </button>
                      </form>
                      <li className="nav-item active">
                        <Link className="nav-link" to="/">
                          Home <span className="sr-only">(current)</span>
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="/">
                          Features
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="/">
                          Pricing
                        </Link>
                      </li>
                      <li className="nav-item dropdown">
                        <Link
                          className="nav-link dropdown-toggle"
                          to="#"
                          id="navbarDropdownMenuLink"
                          role="button"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          Tu Perfil
                        </Link>
                        <div
                          className="dropdown-menu"
                          aria-labelledby="navbarDropdownMenuLink"
                        >
                          <Link className="dropdown-item" to="/">
                            Inicia Sesion
                          </Link>
                          <Link className="dropdown-item" to="/">
                            Registrate
                          </Link>
                          <Link className="dropdown-item" to="/">
                            Something else here
                          </Link>
                        </div>
                      </li>
                    </ul>
                  </div>
        ) : (
            <div className="collapse navbar-collapse">
            <ul className="navbar-nav">
              <form className="form-inline">
                <input
                  className="form-control mr-sm-2"
                  type="search"
                  placeholder="Busca tu producto"
                  aria-label="Search"
                />
                <button
                  className="btn btn-outline-success my-2 my-sm-0"
                  type="submit"
                >
                  Buscar
                </button>
              </form>
              <li className="nav-item active">
                <Link className="nav-link" to="/">
                  Tienda
                </Link>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  to="#"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Mi Perfil
                </Link>
                <div
                  className="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <Link className="dropdown-item" to="/login">
                    Inicia Sesion
                  </Link>
                  <Link className="dropdown-item" to="/signup">
                    Registrate
                  </Link>
                  <Link className="dropdown-item" to="/cart">
                    Carrito
                  </Link>
                </div>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </div>
  );
}

export default Navbar;
