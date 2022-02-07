import './NavBar.css';
import CartWidget from '../CartWidget/CartWidget';


const NavBar = () => {
    return (
<header>
    <nav className= "menu">
            <ul>
                <li>Home</li>
                <li>Contacto</li>
                <li>Productos</li>
            </ul>
            <CartWidget />
    </nav>
</header>
)
}; 

export default NavBar;