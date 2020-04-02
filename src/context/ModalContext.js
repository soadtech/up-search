import React, { createContext, useEffect, useState } from "react";

export const ModalContext = createContext();

const ModalProvider = props => {
  //state
  const [idimagen, guardarIdImagen] = useState(null);
  const [informacion, guardarImagen] = useState({});

  //llamado a api
  useEffect(() => {
    const obtenerImagen = async () => {
      if (!idimagen) return;
      const url = `https://pixabay.com/api/?key=15298543-056142d925b46d3534ce311ad&id=${idimagen}`;

      //haciendo la peticion
      const respuesta = await fetch(url);
      const resultado = await respuesta.json();
      guardarImagen(resultado.hits[0]);
    };
    obtenerImagen();
  }, [idimagen]);
  return (
    <ModalContext.Provider value={{ informacion, guardarIdImagen }}>
      {props.children}
    </ModalContext.Provider>
  );
};

export default ModalProvider;
