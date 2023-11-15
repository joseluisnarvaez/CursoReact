
import './App.css'
import ItemListContainer from './components/ItemListContainer/ItemListContainer.jsx'
import Menu from './components/Menu/Menu.jsx'
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer.jsx'
import { BrowserRouter, Navigate, Route, Router, Routes } from 'react-router-dom'

function App() {

  return (

     <BrowserRouter>
        
      <Menu />
      <Routes>
         <Route path='/' element={<ItemListContainer saludo="Bienvenido a la tienda Momis" />} />
        <Route path='/categoria/:cid' element={<ItemListContainer saludo="Bienvenido a la tienda Momis" />} />
        <Route path='/detalle/:pid' element={<ItemDetailContainer />} />
        <Route path='*' element={<Navigate to='/' />} />
        
      </Routes>
    </BrowserRouter>
   
  )
}

export default App
