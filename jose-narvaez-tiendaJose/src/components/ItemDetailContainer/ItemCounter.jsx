import { useCounter } from "../hook/useCounter"
import {Button} from 'react-bootstrap/Button';


export const ItemCounter = ({inicial = 1, stock = 5 , onAdd}) => {

    const {counter, handleRestar, handleSumar} = useCounter(inicial,stock)
    const handleAdd = () =>{
        onAdd(counter)
    }
  return (
    <div className="w-25">
        <Button variant="primary" size="sm" onClick={handleSumar}>+</Button>
        <label>{counter}</label>
        <Button variant="primary" size="sm" onClick={handleRestar}>-</Button>
        <Button variant="primary" size="lg" onClick={handleAdd}>Agregar al Carrito</Button>
    </div>
  )
}
