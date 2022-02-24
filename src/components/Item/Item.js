import React from 'react'
import { productos } from '../../data/productos';
import ItemCount from '../ItemCount/ItemCount';
import './Item.css';
import { Link } from 'react-router-dom';

const Item = ({ img, name, price, id }) => {
    const onAdd = (qty)=>{
        alert(`Agregaste ${qty} productos a tu carrito`)
      }
      console.log(id);

  return (
    <Link to = {`/detail/${id}`}>
      <div className='card'>
          <img style={{width: '150px'}} src={img} alt='imagen'/>
          <h3>Producto: {name}</h3>
          <h4>Precio : ${price}</h4>
          <ItemCount stock={5} initial={0} onAdd={onAdd}/>
      </div>
    </Link>
  )
}

export default Item