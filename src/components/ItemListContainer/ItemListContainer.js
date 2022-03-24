import { useEffect, useState } from 'react';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';
import { getDocs, collection, query, where } from 'firebase/firestore'
import { db } from '../../services/firebase/firebase'
const ItemListContainer = ({greeting}) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { categoryId } = useParams();
  useEffect(() => {
    setLoading(true);
    const collectionRef = categoryId ? query(collection(db, 'productos'),where('category', '==', categoryId)): collection(db, 'productos')
    getDocs(collectionRef).then(res=>{
      const products = res.docs.map(doc=>{
        return {id: doc.id, ...doc.data()}
      })
      setProducts(products)
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