import './NavBar.css';
import CartWidget from '../CartWidget/CartWidget';
import {NavLink} from 'react-router-dom';
import { CartContext } from '../../Context/CartContext';
import { useContext } from 'react';


const NavBar = () => {
    const { qtyInCart, cart } = useContext(CartContext);
    return (
<nav className='header'>
    <div>
        <h2>Te tiro fruta</h2>
    </div>
    <div className= "menu">
            
            <NavLink className='NavBar' to={'category/fruta'}>Frutas</NavLink>
            <NavLink className='NavBar' to={'category/verdura'}>Verduras</NavLink>
            <NavLink className='NavBar' to={'category/hortaliza'}>Hortalizas</NavLink>
            {qtyInCart(cart)>0 && <CartWidget />}
    </div>
</nav>
)
}; 

export default NavBar;