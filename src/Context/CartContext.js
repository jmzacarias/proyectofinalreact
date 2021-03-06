import { createContext} from 'react';
import { useState } from 'react';

export const CartContext = createContext();

export const CartContextProvider = ({children}) =>{
    const [cart, setCart] = useState ([]);
    const addToCart = (qty, product) =>{
       if (isInCart(product.id)){
        sumarQty(product.id, qty); 
       }else{ 
        setCart([...cart, {...product , qty}  ])}
    }
    const isInCart = (id)=>{
        return cart.some((p)=>p.id === id);
    };
    const sumarQty = (id, qty)=>{
        let newCart = [...cart]
        newCart.forEach((p)=>p.id===id && (p.qty +=qty))
        setCart(newCart)
    }
    const emptyCart = ()=> {setCart([]);
        // this.props.history.push('/');
        }
    const removeById = (id)=>{
        let newCart = [];
        cart.forEach(element => {
            if(element.id!==id){
                newCart.push(element)
            }
        });
        setCart(newCart)
    }

    const qtyInCart = ()=>{
        let totalQty = 0;
        cart.forEach(e=>{totalQty+=e.qty})
        return totalQty
    }

    const totalCart = ()=>{
        let totalAmount = 0;
        cart.forEach(e=>{let amountByProduct = e.qty*e.price;
            totalAmount += amountByProduct})           
            return totalAmount
        }

    return(
        <CartContext.Provider value={{cart, addToCart, emptyCart, removeById, qtyInCart, totalCart}}>
            {children}
        </CartContext.Provider>
    )
}