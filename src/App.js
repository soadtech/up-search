import React, { Fragment } from "react";
import Header from "./components/header/Header";
import ListadoImagenes from "./components/imagenes/ListadoImagenes";
import ImagenesProvider from "./context/ImagenesContext";
import ModalProvider from "./context/ModalContext";

function App() {
  return (
    <Fragment>
      <ImagenesProvider>
        <ModalProvider>
          <Header />
          <ListadoImagenes />
        </ModalProvider>
      </ImagenesProvider>
    </Fragment>
  );
}

export default App;
