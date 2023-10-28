import './App.css'
import ItemListContainer from './components/ItemListContainer/ItemListContainer.jsx'
import Menu from './components/Menu/Menu.jsx'

function App() {

  return (
    <>
    <Menu />
    <ItemListContainer saludo="Bienvenido a la tienda Momis" />
    </>
  )
}

export default App
