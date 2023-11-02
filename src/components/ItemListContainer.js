import { useState, useEffect } from "react"
import ItemList from "./ItemList.js"
import '../styles/itemlistcontainer.css'

export default function ItemListContainer() {
  const [products, setProducts] = useState([])
  useEffect(() => {
    fetch("/lamps.json")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data)
        console.log(data)
      })
      .catch((error) => console.log(error))
  }, []);

  return (
    <main>
      <section className="wrapper-products">
        <ItemList lamparas={products} />
      </section>
    </main>
  );
}
