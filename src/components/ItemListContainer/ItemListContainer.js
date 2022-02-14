import React from 'react';
import ItemCount from '../ItemCount/ItemCount';

const ItemListContainer = ({greeting}) => {
  return (
    <div>
        <h1 style={{color: 'green', backgroundColor:'white'}}>{greeting}</h1>
        <ItemCount />
    </div>
  )
};

export default ItemListContainer