import  { useEffect, useState } from 'react'
import ItemDetail from '../ItemDetail/ItemDetail';
import { traerProducto } from '../../data/productos';
import { useParams } from 'react-router-dom';



const ItemDetailContainer = () => {
    const [item, setItem] = useState()
    const [loading, setLoading] = useState(true)
    const params = useParams();
    console.log(params);

    useEffect(() => {
        traerProducto(2).then(r=>{
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