import './NavBar.css';
import CartWidget from '../CartWidget/CartWidget';
import {NavLink} from 'react-router-dom';


const NavBar = () => {
    return (
<nav className='NavBar'>
    <div>
        <h2>Te tiro fruta</h2>
    </div>
    <div className= "menu">
            
            <NavLink to={'category/frutas'}>Frutas</NavLink>
            <NavLink to={'category/verduras'}>Verduras</NavLink>
            <NavLink to={'category/hortalizas'}>Hortalizas</NavLink>
            <CartWidget />
    </div>
</nav>
)
}; 

export default NavBar;