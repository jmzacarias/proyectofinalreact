import React from 'react'
import { CartContext } from '../../Context/CartContext';
import { useContext, useState, useRef} from 'react';
import { Link } from 'react-router-dom';
import { addDoc , collection, writeBatch , where,  getDocs , query,  documentId} from 'firebase/firestore';
import { db } from '../../services/firebase/firebase';
import './Cart.css';
import CustomerForm from '../CustomerForm/CustomerForm';
import Togglable from '../Togglable/Togglable';
const Cart = () => {
  const { totalCart, qtyInCart, emptyCart, cart, removeById } = useContext(CartContext);
  const [customer, setCustomer] = useState ({
    name:'',
    phone:'',
    address:'',
  })
  const customerFormRef = useRef()
  const confirmOrder = ()=>{
    if(customer.phone !== '' && customer.address !== '' && customer.name !== '') {
      const objOrder = {
        buyer: customer,
        items: cart,
        total: totalCart(cart),
        date: new Date()
      }
      const batch = writeBatch(db)
      const outOfStock = []
      const ids = objOrder.items.map(i => i.id)
      getDocs(query(collection(db, 'products'),where(documentId(), 'in', ids)))
      .then(res => {
        res.docs.forEach((p) => {
         if(p.data().stock >= objOrder.items.find(prod => prod.id === p.id).qty) {
         batch.update(p.ref, { stock: p.data().stock - objOrder.items.find(prod => prod.id === p.id).qty})
          }else{
            outOfStock.push({ id: res.id, ...res.data()})
          }
        })
      }).then(()=>{
        if(outOfStock.length === 0){
          addDoc(collection(db,'orders'), objOrder).then(({id})=>{
            batch.commit().then(()=>{
              emptyCart();
              alert(`Su orden de compra es la nro ${id}`)
            })
          }).catch(error=>{
           alert(`error: ${error}`)
          })
        }else{
          const noDisponible = []
          outOfStock.forEach(p=>{
            noDisponible.push(p.name);
            removeById(p.id);
          })
          if (noDisponible.length > 1) {
            alert(`Momentáneamente no tenemos stock suficiente de los siguientes productos: ${noDisponible.toString()}`)
          }else{
            alert(`Momentáneamente no tenemos suficiente stock de ${noDisponible.toString()}`)
          }
            
        }
     })   
  }else{
   alert('Es necesario ingresar los datos del Cliente')
  }
  }
  return (
    <div>
        {
          qtyInCart()>0 ?
         <div><h1>Estás por comprar:</h1>
        {cart.map(element=><div className='elementoCarrito' key={element.id}>
          <div >{element.qty} {element.name} por ${element.price} c/u</div>
          <button onClick={()=>{
            removeById(element.id)
          }}>X</button></div>)}
          <p>Total: ${totalCart()}</p>
        <Link to={(customer.phone !== '' && customer.address !== '' && customer.name !== '') ? '/' : '/cart' }>
          <button onClick={()=>{confirmOrder()}}>Finalizar Compra</button>
        </Link>
        <Link to='/'>
          <button onClick={()=>{emptyCart()}}>Vaciar carrito</button>
        </Link>
        </div> :
        <div><h2>No hay productos en tu carrito</h2><Link to='/'>
        <button>Volver el inicio</button>
      </Link></div>
        }
        {
          (customer.phone !== '' && customer.address !== '' && customer.name !== '') && 
          <div className='formCompleto'>
              <p>Estimado, {customer.name}, tu pedido está casi listo y será enviado a {customer.address}.</p>
              <p>Ante cualquier eventualidad nos comunicaremos con vos al {customer.phone}</p>
              <button onClick={() => setCustomer({ phone: '', address: '', name: ''})} 
                      className='boton'>
                  Borrar datos de cliente
              </button>
          </div>  
        }
       <Togglable buttonLabelShow={
                  (customer.phone !== '' && customer.address !== ''  && customer.name !== '') 
                      ? 'Editar contacto' 
                      : 'Agregar contacto'
                  } 
                  ref={customerFormRef}>
          <CustomerForm toggleVisibility={customerFormRef} setCustomer={setCustomer} />
      </Togglable>
    </div>
  )
}

export default Cart