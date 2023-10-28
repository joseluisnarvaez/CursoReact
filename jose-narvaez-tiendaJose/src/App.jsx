import './App.css'
import ItemListContainer from './components/ItemListContainer/ItemListContainer.jsx'
import NavBar from './components/menu/navbar.jsx'

function App() {

  return (
    <>
    <NavBar />
    <ItemListContainer saludo="Bienvenido a la tienda de Jose" />
    </>
  )
}

export default App
