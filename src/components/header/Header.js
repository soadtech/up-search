import React, { useState, useContext } from "react";
import Error from "../mensajes/Error";
import { ImagenesContext } from "../../context/ImagenesContext";

const Header = () => {
  const [busqueda, setTermino] = useState("");
  const [error, setError] = useState(false);

  const { buscarImagenes, guardarConsultar, guardarConsultarInfo } = useContext(
    ImagenesContext
  );

  return (
    <header>
      <nav className="container navbar navbar-expand-lg navbar-light">
        <a className="navbar-brand" href="!#">
          <img src="https://i.ibb.co/CWvJNMR/logo.png" alt="imagen" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarSupportedContent"
        >
          {error ? <Error mensaje="Agrega un termino de busqueda" /> : null}
          <form
            className="form-inline"
            onSubmit={e => {
              e.preventDefault();
              buscarImagenes(busqueda);
              guardarConsultar(true);
              guardarConsultarInfo(true);
            }}
          >
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              onChange={e => setTermino(e.target.value)}
            />
            <button className="btn btn-outline-dark my-2 my-sm-0" type="submit">
              Search
            </button>
          </form>
        </div>
      </nav>
    </header>
  );
};

export default Header;
