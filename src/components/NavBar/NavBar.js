import './NavBar.css';
import CartWidget from '../CartWidget/CartWidget';
import {NavLink, Link} from 'react-router-dom';
import { CartContext } from '../../Context/CartContext';
import { useContext , useEffect , useState} from 'react';
import {  getCategories } from '../../services/firebase/firebase'
const NavBar = () => {
    const { qtyInCart, cart } = useContext(CartContext);
    const [categories, setCategories] = useState([])

    useEffect(()=>{
       getCategories().then(res=>{
           setCategories(res)
       }).catch((error)=>console.log(`Error obteniendo categorias en NavBar: ${error}`))
    },[])
    return (
        <nav className='header'>
            <div>
                <Link to='/'><h2>Te tiro fruta</h2></Link>
            </div>
            <div className= "menu">
                    {categories.map(cat=> <NavLink key={cat.id} to={`/category/${cat.id}`} className='NavBar'>{cat.name}</NavLink> )}
                    {qtyInCart(cart)>0 && <CartWidget />}
            </div>
        </nav>
    )
}; 
export default NavBar;