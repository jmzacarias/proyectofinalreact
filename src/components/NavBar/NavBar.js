import './NavBar.css';
import CartWidget from '../CartWidget/CartWidget';
import {NavLink} from 'react-router-dom';


const NavBar = () => {
    return (
<nav className='header'>
    <div>
        <h2>Te tiro fruta</h2>
    </div>
    <div className= "menu">
            
            <NavLink className='NavBar' to={'category/fruta'}>Frutas</NavLink>
            <NavLink className='NavBar' to={'category/verdura'}>Verduras</NavLink>
            <NavLink className='NavBar' to={'category/hortaliza'}>Hortalizas</NavLink>
            <CartWidget />
    </div>
</nav>
)
}; 

export default NavBar;