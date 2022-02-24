import React from 'react'
import './ItemDetail.css'

const ItemDetail = ( { item }) => {
    return ( 
        <div className='ItemDetailContainer'>  
            <div className='ItemDetail'>
                <img style={{width: '200px'}} src={item.img} alt={item.title} width={300} />
                <h2>Precio: $ {item.price}</h2>
                <h3>Producto:{item.name}</h3>
                <p>{item.description}</p>
            </div>
        </div>
    )
}

export default ItemDetail 