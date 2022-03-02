import React from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import './CartWidget.css'
import { Link } from 'react-router-dom';
import { CartContext } from '../../Context/CartContext';
import { useContext } from 'react';

const CartWidget = () => {
    const { qtyInCart, cart } = useContext(CartContext);
    return (
        <Link to='/cart'><div className='cart'>
            <ShoppingCartIcon />  <div>{qtyInCart(cart)}</div>
        </div></Link>
    )
}

export default CartWidget;
