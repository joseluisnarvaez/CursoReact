import { createContext, useContext, useEffect, useState } from 'react'

const CartContext = createContext([]);

export const useCartContext = () => useContext(CartContext)

export const CartContextProvider = ({children}) => {
    const [cartList, setCartList] = useState([])
    const [totalCarrito, setTotalCarrito] = useState(0)
    const [totalProductos, setTotalProductos] = useState(0)
    
    const addProduct = (product) => {
   
        const index = cartList.findIndex( (productItem) => productItem.id === product.id )
        if(index >-1){
            cartList[index].cantidad += product.cantidad
            setCartList([...cartList]
            )
            totalPrices()
            return ;
        }
        setCartList([
            ...cartList,
            product]
        )
    }
    const vaciarCarrito = () => {
        setCartList([])
        setTotalCarrito(0)
    }
    const totalPrices = () => {
        let total = 0;
        cartList.forEach((product) => {
        total += product.cantidad * product.price;
        });
        setTotalCarrito(total)
    }
    const totalProduct = () => {
        let total = 0;
        cartList.forEach((product) => {
        total += product.cantidad;
        });
        setTotalProductos(total)
    }

    const eliminaProducto = (id) => {
        setCartList(cartList.filter((product) =>id !== product.id))
    }

    useEffect(() => {
        totalPrices()
        totalProduct()
      }, [cartList]);
    return (
        <CartContext.Provider value={{
            cartList,
            totalCarrito,
            totalProductos,
            addProduct,
            vaciarCarrito,
            eliminaProducto
        }}>
        {children}
        </CartContext.Provider>
    )
}