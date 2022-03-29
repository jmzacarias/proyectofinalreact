import React, {useState} from 'react'
import './ItemCount.css'
const ItemCount = ({ stock, initial, onAdd }) => {
        const [counter, setCounter] = useState(initial);  
    return (
        <section className='counterContainer'>       
            <div className='counterBtn'>
                <button onClick={()=> {
                    if (counter > 0) {setCounter(counter - 1)}}}>-</button>             
                { counter > 0 ?
                <button  onClick={()=>{onAdd(counter)}}> Agregar {counter} productos al carrito</button> :
                <button className='disabled'> Agregar {counter} productos al carrito</button> 
                }
                <button onClick={()=> {
                    if (counter < stock) {setCounter(counter + 1)}}}>+</button>              
            </div> 
        </section> 
    )
}
export default ItemCount
