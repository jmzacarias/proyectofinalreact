import  { useEffect, useState } from 'react'
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';
import { getProductById} from '../../services/firebase/firebase'
const ItemDetailContainer = () => {
    const [item, setItem] = useState()
    const [loading, setLoading] = useState(true)
    let { productId } = useParams()
    useEffect(() => {
        setLoading(true);
        getProductById(productId).then(res=>{
          setItem(res)  
        }).catch((error)=>{
            alert(`error: ${error}`)
        })
       .finally(()=>{
            setLoading(false)
        })
    },[productId])
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