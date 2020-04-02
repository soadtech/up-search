import React, { useContext } from "react";
import { ModalContext } from "../../context/ModalContext";
import { ImagenesContext } from "../../context/ImagenesContext";

const Imagen = ({ imagen }) => {
  //extraer valores de modalcontext
  const { guardarIdImagen } = useContext(ModalContext);
  const { guardarConsultarInfo } = useContext(ImagenesContext);

  //extraer variables
  const { largeImageURL, tags } = imagen;
  return (
    <div className="imagen">
      <button
        onClick={() => {
          guardarIdImagen(imagen.id);
          guardarConsultarInfo(true);
        }}
      >
        <img src={largeImageURL} alt={tags} />
      </button>
    </div>
  );
};

export default Imagen;
