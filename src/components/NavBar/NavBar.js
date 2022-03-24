import './NavBar.css';
import CartWidget from '../CartWidget/CartWidget';
import {NavLink} from 'react-router-dom';
import { CartContext } from '../../Context/CartContext';
import { useContext , useEffect , useState} from 'react';
import { getDocs , collection } from 'firebase/firestore';
import { db } from '../../services/firebase/firebase'
const NavBar = () => {
    const { qtyInCart, cart } = useContext(CartContext);
    const [categories, setCategories] = useState([])

    useEffect(()=>{
        getDocs(collection(db, 'categories')).then(res => {
            const categories = res.docs.map(cat=>{
                return { id: cat.id, ...cat.data()}
            })
            setCategories(categories)
        })
    },[])
    return (
<nav className='header'>
    <div>
        <h2>Te tiro fruta</h2>
    </div>
    <div className= "menu">
            {categories.map(cat=> <NavLink key={cat.id} to={`/category/${cat.id}`} className='NavBar'>{cat.name}</NavLink> )}
            {qtyInCart(cart)>0 && <CartWidget />}
    </div>
</nav>
)
}; 

export default NavBar;