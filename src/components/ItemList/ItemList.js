import React from 'react';
import Item from '../Item/Item';


const ItemList = ({ products }) => {
  return (
    <div>
        {products.map((product) => {
					return <Item {...product} key={product.id} />;
				})}
    </div>
  )
}

export default ItemList