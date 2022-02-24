import React from 'react'
import ItemCount from '../ItemCount/ItemCount';
import './Item.css';
import { Link } from 'react-router-dom';

const Item = ({ product }) => {
    const onAdd = (qty)=>{
        alert(`Agregaste ${qty} productos a tu carrito`)
      }

  return (
    
      <div className='card'>
          <img style={{width: '150px'}} src={product.img} alt='imagen'/>
          <h3>Producto: {product.name}</h3>
          <h4>Precio : ${product.price}</h4>
          <ItemCount stock={5} initial={0} onAdd={onAdd}/>
          <Link to = {`/item/${product.id}`}><button>Ver detalles</button></Link>
      </div>
    
  )
}

export default Item