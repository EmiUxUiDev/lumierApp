
import React, { useState, useEffect } from "react";
import Layout from "../components/Layout.js";
import { useParams } from "react-router-dom";
import Item from "../components/Item.js";


export default function Category() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("/lamps.json")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        console.log(data);
      });
  }, []);
  //Me trae la info de la barra del navegador, la variable.
  const { category } = useParams();
  console.log(category)
  const categories = products.filter((item) => item.categoria === category)
 console.log(categories)
  return (
    <Layout>
      {categories.map((lampara) => {
        return(
          <Item
          id={lampara.id}
          nombre={lampara.nombre}
          descripcion={lampara.descripcion}
          precio={lampara.precio}
          path={lampara.path}
        />
        )
      })}
    </Layout>
  );
}
