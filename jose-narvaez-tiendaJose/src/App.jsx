
import './App.css'
import ItemListContainer from './components/ItemListContainer/ItemListContainer.jsx'
import Menu from './components/Menu/Menu.jsx'
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer.jsx'
import { BrowserRouter, Navigate, Route, Router, Routes } from 'react-router-dom'
import {  CartContextProvider } from './components/Context/CartContext.jsx'
import { Cart } from './components/Cart/Cart.jsx'

function App() {

  return (
    <CartContextProvider> 
      <BrowserRouter>
          
        <Menu />
        <Routes>
          <Route path='/' element={<ItemListContainer saludo="Bienvenido a la tienda Momis" />} />
          <Route path='/categoria/:cid' element={<ItemListContainer saludo="Bienvenido a la tienda Momis" />} />
          <Route path='/detalle/:pid' element={<ItemDetailContainer />} />
          <Route path='/carrito' element={<Cart />} />
          <Route path='*' element={<Navigate to='/' />} />
          
        </Routes>
      </BrowserRouter>
    </CartContextProvider>
  )
}

export default App
