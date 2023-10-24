import React from "react";
import Item from "./Item.js";
import "../styles/itemlist.css"

export default function ItemList({ lamparas }) {
  return (
    <div className="wrapper-itemlist">
      {lamparas.map((lampara) => {
        return (
          <Item
            id={lampara.id}
            nombre={lampara.nombre}
            descripcion={lampara.descripcion}
            precio={lampara.precio}
            path={lampara.path}
          />
        );
      })}
    </div>
  );
}
