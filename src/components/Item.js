import React from 'react'

export default function Item({id, nombre, descripcion, precio, path}){
  console.log({path})
  return (
        <article className='wrapper-item'>
            <h2>{nombre}</h2>
            <p>{descripcion}</p>
            <h3>{precio}</h3>
            <img src={`/assets/${path}`} alt='descripcion de la imagen'/>
            <p>****************</p>
        </article>
  )
}

