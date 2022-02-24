import  { useEffect, useState } from 'react'
import ItemDetail from '../ItemDetail/ItemDetail';
import { traerProducto } from '../../data/productos';
import { useParams } from 'react-router-dom';



const ItemDetailContainer = () => {
    const [item, setItem] = useState()
    const [loading, setLoading] = useState(true)
    let { productId } = useParams()
    
    useEffect(() => {
        traerProducto(productId).then(item=>{
            setItem(item)
            setLoading(false)
        }).catch(error=>{ 
        console.log(error);})
    },[]);

    return (
        <>
             {
                loading ?
                <p>Cargando detalle de producto.</p>
                :
                <ItemDetail item={item} />
            } 
            
        </>
    )
}
 
export default ItemDetailContainer