import React from 'react'
import { productos } from '../../data/productos';
import ItemCount from '../ItemCount/ItemCount';

const Item = ({ img, name, price }) => {
    const onAdd = (qty)=>{
        alert(`Agregaste ${qty} productos a tu carrito`)
      }

  return (
    <div>
        <img style={{width: '150px'}}src={img} alt='imagen'/>
        <h3>Producto {name}</h3>
        <h4>Precio : ${price}</h4>
        <ItemCount stock={5} initial={0} onAdd={onAdd}/>
    </div>
  )
}

export default Item