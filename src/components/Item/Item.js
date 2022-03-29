import React from 'react'
import './Item.css';
import { Link } from 'react-router-dom';
const Item = ({ product }) => {
  return (
      <div className='card'>
          <img style={{width: '150px', height: '100px'}} src={product.img} alt='imagen'/>
          <p>Producto: {product.name}</p>
          <p>Precio : ${product.price}</p>
          <Link to = {`/item/${product.id}`}><button>Ver detalles</button></Link>
      </div>
  )
}
export default Item