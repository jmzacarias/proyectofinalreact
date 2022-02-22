import React from 'react';
import Item from '../Item/Item';
import './ItemList.css';


const ItemList = ({ products }) => {
  return (
    <div className='ItemList'>
        {products.map((product) => {
					return <Item {...product} key={product.id} />;
				})}
    </div>
  )
}

export default ItemList