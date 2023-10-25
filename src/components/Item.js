import React from "react";
import "../styles/item.css";

export default function Item({ id, nombre, descripcion, precio, path, categoria }) {
  console.log({ path });
  return (
    <article className="wrapper-item">
      <img src={`/assets/${path}`} alt="descripcion de la imagen" />
      <div className="line"></div>
      <div className="wrapper-content">
        <h2>{nombre}</h2>
        <p>{descripcion}</p>
        <p className="product-price">{`$${precio}`}</p>
      </div>
    </article>
  );
}
