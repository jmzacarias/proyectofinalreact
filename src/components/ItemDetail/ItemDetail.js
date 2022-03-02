import React from 'react'
import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount';
import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../Context/CartContext';

const ItemDetail = ( { item }) => {
    const [quantity, setQuantity] = useState(0);
    const { addToCart, cart } = useContext(CartContext);
   
    const onAdd = (qty)=>{
        setQuantity(qty)
        addToCart(qty, item)
        console.log(cart)
      }

    return ( 
        <div className='ItemDetailContainer'>  
            <div className='ItemDetail'>
                <img style={{width: '200px'}} src={item.img} alt={item.title} width={300} />
                <h2>Precio: $ {item.price}</h2>
                <h3>Producto:{item.name}</h3>
                <p>{item.description}</p>     
                
                { quantity === 0 ? <ItemCount stock={item.stock} initial={0} onAdd={onAdd}/> : 
                <div><Link to= '/Cart'><button className='botonesPostCompra'>Ir al Carrito</button></Link>
                <Link to= '/'><button className='botonesPostCompra'>Seguir comprando</button></Link></div>} 
                
            </div>
        </div>
    )
}

export default ItemDetail 