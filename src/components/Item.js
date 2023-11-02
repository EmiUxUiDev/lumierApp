import React from "react";
import "../styles/item.css";
import { Link } from "react-router-dom";
import irIcono from "../icons/chevron-right-solid.svg";
export default function Item({id, nombre, descripcion, precio, path }) {
  return (
    <article className="wrapper-item">
      <img
        className="item-img"
        src={`/assets/${path}`}
        alt="descripcion de la imagen"
      />
      <div className="line"></div>
      <div className="wrapper-content">
        <p className="product-price">{`$${precio}`}</p>
        <h2>{nombre}</h2>
        <p>{descripcion}</p>
      </div>
      <div className="line"></div>
      
        <Link  className="link-to-detail" to={`/detail/${id}`}>
          Ver detalle del producto
          <img
            className="icono-ir"
            src={irIcono}
            alt="Flecha de navegar a detalle"
          />
        </Link>
      
    </article>
  );
}
