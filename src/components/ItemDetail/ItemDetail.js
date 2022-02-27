import React from 'react'
import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const ItemDetail = ( { item }) => {
    const [quantity, setQuantity] = useState(0);
   
    const onAdd = (qty)=>{
        setQuantity(qty)
      }

    return ( 
        <div className='ItemDetailContainer'>  
            <div className='ItemDetail'>
                <img style={{width: '200px'}} src={item.img} alt={item.title} width={300} />
                <h2>Precio: $ {item.price}</h2>
                <h3>Producto:{item.name}</h3>
                <p>{item.description}</p>     
                
                { quantity === 0 ? <ItemCount stock={5} initial={0} onAdd={onAdd}/> : 
                <Link to= '/Cart'>Ir al Carrito</Link>} 
                
            </div>
        </div>
    )
}

export default ItemDetail 