// import React, { useState, useEffect } from 'react'
// import {useParams} from "react-router-dom"
// import { Link } from "react-router-dom";
// import Layout from '../components/Layout';

// export default function ItemDetailView() {

//   const params = useParams()
//   const [detail, setDetail] = useState("")

//   useEffect(()=>{
//     fetch("/lamps.json")
//       .then((res)=> res.json())
//       .then((data)=>{
//         const result = data.find((item)=> item.id === parseInt(params.id))
//         setDetail(result)
//       })
//   },[])


//   return (
//     <Layout>
//       <p>El ID del producto seleccionado es: {detail.id}</p>
//       <p>El detalle del producto seleccionado es: {detail.detalle}</p>
//       <Link to="/">
//         <h3>Volver a Home</h3>
//       </Link>
//     </Layout>
//   )
// }

import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Layout from '../components/Layout';

export default function ItemDetailView() {
  const params = useParams();
  const [detail, setDetail] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);

    fetch("/lamps.json")
      .then((res) => {
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        return res.json();
      })
      .then((data) => {
        const result = data.find((item) => item.id === parseInt(params.id));
        if (result) {
          setDetail(result);
        } else {
          setError('Product not found');
        }
      })
      .catch((error) => {
        setError('Error fetching data');
      })
      .finally(() => {
        // Simulating a 0.8seg
        setTimeout(() => {
          setLoading(false);
        }, 800);
      });
  }, [params.id]);

  if (loading) {
    return (
      <Layout>
        <p>Loading...</p>
      </Layout>
    );
  }

  if (error) {
    return (
      <Layout>
        <p>Error: {error}</p>
      </Layout>
    );
  }

  return (
    <Layout>
      <p>El ID del producto seleccionado es: {detail && detail.id}</p>
      <p>El detalle del producto seleccionado es: {detail && detail.detalle}</p>
      <Link to="/">
        <h3>Volver a Home</h3>
      </Link>
    </Layout>
  );
}


