import React from 'react'
import { CartContext } from '../../Context/CartContext';
import { useContext, useState} from 'react';
import { Link } from 'react-router-dom';
import { addDoc , collection, writeBatch , doc, getDoc } from 'firebase/firestore';
import { db } from '../../services/firebase/firebase';
import './Cart.css'
const Cart = () => {
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

    const batch = writeBatch(db)
    const outOfStock = []

    objOrder.items.forEach(p=>{
      getDoc(doc(db,'productos', p.id)).then(res=>{
        if(p.stock>=objOrder.items.find(prod => prod.id === p.id).qty){
          batch.update(doc(db,'productos',res.id),{
            stock: p.stock - objOrder.items.find(prod => prod.id === p.id).qty
          })
        }else{
          outOfStock.push({ id: res.id, ...res.data()})
        }
      })
    })
    if(outOfStock.length === 0){
      addDoc(collection(db,'orders'), objOrder).then(({id})=>{
        batch.commit().then(()=>{
          alert(`Su orden de compra es la nro ${id}`)
        })
      }).catch(error=>{
        console.log({error:error})
      })
    }else{
      alert(`Stock insuficiente `)
    }
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