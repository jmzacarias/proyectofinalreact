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

    const emptyCart = ()=> setCart([]);

    const removeById = (id)=>{
        let newCart = [...cart];
        const indexToRemove = newCart.findIndex(prod =>{
            return prod.id===id;
        })
        console.log(indexToRemove);
        newCart.splice(indexToRemove, 1)
        setCart(newCart)
    }



    return(
        <CartContext.Provider value={{cart, addToCart}}>
            {children}
        </CartContext.Provider>
    )
;
    }