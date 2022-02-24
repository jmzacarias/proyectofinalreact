import { useEffect, useState } from 'react';
import { traerProductos } from '../../data/productos';
import ItemList from '../ItemList/ItemList';



const ItemListContainer = ({greeting}) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
      traerProductos().then(res => {
            setProducts(res)
          }).catch(error => {
              console.log(error)
          })
          .finally(() => {
              setLoading(false)
          })
          return (()=> { 
              setProducts()
          })
  },[]);


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