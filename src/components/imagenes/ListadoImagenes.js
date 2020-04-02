import React, { useContext } from "react";
import Imagen from "./Imagen";
import Informacion from "./Informacion";
import { ImagenesContext } from "../../context/ImagenesContext";
import { ModalContext } from "../../context/ModalContext";

const ListadoImagenes = () => {
  //extraer imagenes
  const { imagenes, consultar, consultarinfo } = useContext(ImagenesContext);
  const { informacion } = useContext(ModalContext);

  return (
    <div className="container">
      <h2 className="result">
        {consultarinfo ? (
          "Resultado de busqueda"
        ) : (
          <div className="mt-5">
            <h2>
              <span>
                Imagenes y videos gratuitos que puede usar en cualquier lugar
              </span>
            </h2>
            <p className="h5">
              Up search es una comunidad dinámica de creativos que comparten
              imágenes y videos sin derechos de autor. Todos los contenidos se
              publican bajo la Licencia Pixabay, que los hace seguros para usar
              sin pedir permiso o dar crédito al artista, incluso con fines
              comerciales.
            </p>
          </div>
        )}
      </h2>
      <div className="contenedor-imagenes">
        <div className="imagenes">
          {imagenes.map(imagen => (
            <Imagen key={imagen.id} imagen={imagen} />
          ))}
        </div>
        {consultar ? (
          <div className="info-imagenes">
            {consultarinfo ? (
              <div className="info">
                <div className="profile">
                  <img src={informacion.userImageURL} alt="imagen" />

                  <h2 className="name my-4">{informacion.user}</h2>
                </div>
                <p className="descripcion my-4 text-primary">
                  Tags: <span className="text-dark">{informacion.tags}</span>
                </p>
              </div>
            ) : null}
            <div className="navegacion">navegacion</div>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default ListadoImagenes;
