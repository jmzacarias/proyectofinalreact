import React from 'react';
import ItemCount from '../ItemCount/ItemCount';

const ItemListContainer = ({greeting}) => {
  const onAdd = (qty)=>{
    alert(`Agregaste ${qty} productos a tu carrito`)
  }
  return (
    <div>
        <h1 style={{color: 'green', backgroundColor:'white'}}>{greeting}</h1>
        <ItemCount stock={5} initial={0} onAdd={onAdd}/>
    </div>
  )
};

export default ItemListContainer