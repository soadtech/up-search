import React, { createContext, useState, useEffect } from "react";

export const ImagenesContext = createContext();

const ImagenesProvider = props => {
  const [imagenes, guardarImagenes] = useState([]);
  const [busqueda, buscarImagenes] = useState("");

  const [consultar, guardarConsultar] = useState(false);
  const [consultarinfo, guardarConsultarInfo] = useState(false);

  useEffect(() => {
    if (consultar) {
      const obtenerImagenes = async () => {
        const imagenesPorPagina = 24;
        const width = 200;
        const key = "15298543-056142d925b46d3534ce311ad";
        const url = `https://pixabay.com/api/?key=${key}&q=${busqueda}&per_page=${imagenesPorPagina}&min_width=600`;

        //haciendo la peticion
        const respuesta = await fetch(url);
        const resultado = await respuesta.json();
        guardarImagenes(resultado.hits);
      };
      obtenerImagenes();
    }
  }, [busqueda]);

  return (
    <ImagenesContext.Provider
      value={{
        consultar,
        consultarinfo,
        imagenes,
        buscarImagenes,
        guardarConsultar,
        guardarConsultarInfo
      }}
    >
      {props.children}
    </ImagenesContext.Provider>
  );
};

export default ImagenesProvider;
