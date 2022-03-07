import { useEffect, useState } from 'react';
// import { traerProductos, traerProductosPorCategoria } from '../../data/productos';
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

    const productCollection = collection(db, 'productos');
    const filteredProductsByCategory = query(productCollection, where("category", "==", categoryId));

    const collectionRef = !categoryId ? productCollection : filteredProductsByCategory

    getDocs(collectionRef).then(res=>{
      const products = res.docs.map(doc=>{
        console.log(doc)
        return {id: doc.id, ...doc.data()}
      })
      console.log(products);
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