import { useEffect, useState } from 'react';
import { traerProductos, traerProductosPorCategoria } from '../../data/productos';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';



const ItemListContainer = ({greeting}) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { categoryId } = useParams();


  useEffect(() => {
    if (!categoryId){
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
    }else{
      traerProductosPorCategoria(categoryId).then(res=>{
        setProducts(res)
      }).catch(error=>{
        console.log(error)
      }).finally(()=>{
        setLoading(false)
      })
    }
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