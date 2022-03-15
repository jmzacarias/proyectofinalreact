import React from 'react'
import { CartContext } from '../../Context/CartContext';
import { useContext, useState} from 'react';
import { Link } from 'react-router-dom';
import { addDoc , collection } from 'firebase/firestore';
import { db } from '../../services/firebase/firebase';
import './Cart.css'

const Cart = () => {
  // const [processingOrder, setProcessingOrder] = useState(false)
  const { totalCart, qtyInCart, emptyCart, cart, removeById } = useContext(CartContext);
  
  const confirmOrder = ()=>{
    // setProcessingOrder(true);

    const objOrder = {
      buyer: {
        name: 'Juan',
        phone: '2524423432',
        adress: 'Siempre Viva 1234'
      },
      items: cart,
      total: totalCart(cart),
      date: new Date()
    }
    console.log(objOrder)

    addDoc(collection(db,'orders'), objOrder).then((response)=>{
      console.log(response)
    })
  }
  return (
    <div>
        {
          qtyInCart(cart)>0 ?
         <div><h1>Estás por comprar:</h1>
        {cart.map(element=><div className='elementoCarrito' key={element.id}>
          <div >{element.qty} {element.name} por ${element.price} c/u</div>
          <button onClick={()=>{
            removeById(element.id)
          }}>X</button></div>)}
          <p>Total: ${totalCart(cart)}</p>
        <Link to='/'>
          <button onClick={()=>{confirmOrder(); emptyCart()}}>Finalizar Compra</button>
        </Link>
        <Link to='/'>
          <button onClick={()=>{emptyCart()}}>Vaciar carrito</button>
        </Link>
        </div> :
        <div><h2>No hay productos en tu carrito</h2><Link to='/'>
        <button>Volver el inicio</button>
      </Link></div>
        }
        

    </div>
    
  )
}

export default Cart