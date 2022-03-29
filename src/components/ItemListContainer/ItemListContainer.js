import { useEffect, useState } from 'react';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';
import { getProducts } from '../../services/firebase/firebase'
const ItemListContainer = ({greeting}) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { categoryId } = useParams();
  useEffect(() => {
    setLoading(true);
    getProducts(categoryId).then(res=>{
      setProducts(res)
    }).catch((error)=>{
      alert(`Error buscando productos: ${error}`)
    }).finally(()=>{
      setLoading(false)
    })
  },[categoryId]);
  return (
    <div className='ItemListContainer'>
        <h1 style={{color: 'green', backgroundColor:'white'}}>{greeting}</h1>
        { 
         loading ? <h2>Cargando...</h2> :
         <ItemList products={products}/>
        }
    </div>
  )
};
export default ItemListContainer