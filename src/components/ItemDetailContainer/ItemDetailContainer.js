import  { useEffect, useState } from 'react'
import ItemDetail from '../ItemDetail/ItemDetail';
// import { traerProducto } from '../../data/productos';
import { useParams } from 'react-router-dom';
import { getDoc, doc } from 'firebase/firestore';
import {db} from '../../services/firebase/firebase'


const ItemDetailContainer = () => {
    const [item, setItem] = useState()
    const [loading, setLoading] = useState(true)
    let { productId } = useParams()
    
    useEffect(() => {
        setLoading(true);

        const docRef = doc(db, 'productos', productId);

        getDoc(docRef).then(res=>{
            const product = {id: res.id, ...res.data()}
            setItem(product)
        }).finally(()=>{
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