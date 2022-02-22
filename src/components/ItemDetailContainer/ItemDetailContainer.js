import  { useEffect, useState } from 'react'
import ItemDetail from '../ItemDetail/ItemDetail';
import { traerProducto } from '../../data/productos';



const ItemDetailContainer = () => {
    const [item, setItem] = useState()
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        traerProducto(1).then(r=>{
            setItem(r)
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