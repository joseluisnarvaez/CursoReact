import { useState } from 'react'
import { useCartContext } from '../Context/CartContext'
import {Table, Button} from "react-bootstrap";
import { saveOrder } from '../../fuctions/FirebasesConf';
import { Alert } from '../Alerts/AlertConft';

export const Cart = () => {

    const {cartList, totalCarrito,vaciarCarrito, eliminaProducto} =  useCartContext()
    const [showAlert, setShowAlert] = useState(false);
    const [alertVariant, setAlertVariant] = useState('success');
    const [alertMessage, setAlertMessage] = useState('');


    const handlerOrder =() => {
        const order = {}
        order.buyer = {name : 'Jose' , phone: '12345678', email : 'jnarvaez@gmail.com'}
        order.item = cartList.map(({id, name,price}) =>  ({id,name,price}))
        order.total = totalCarrito
        console.log(order)
        saveOrder(order).then((order) => {
             vaciarCarrito()
              console.log(order)
              setAlertVariant('success');
              setAlertMessage('¡Compra realizada con éxito!');
              setShowAlert(true);
            }).catch((error) => console.error(error))
       
    }

    const handlerDeleted =(id) =>{
        eliminaProducto(id)
        setAlertMessage('¡Producto eliminado con éxito!')
        setShowAlert(true)
    } 
    const handlerVaciarCarrito =(id) =>{
        vaciarCarrito()
        setAlertMessage('Carrito Vacio')
        setShowAlert(true)
    } 


console.log(cartList)
  return (
    <>
     {showAlert && <Alert mensaje={alertMessage} diseño={alertVariant} showAlert={showAlert}  setShowAlert={setShowAlert}/>}
    <Table responsive="xl" striped="columns" title="Datos" className="table">
    <thead>
      <tr>
      <th>nombre</th>
      <th>categoria</th>
      <th>Cantidad</th>
      <th>precio</th>
      <th>total</th>
      <th></th>
      </tr>
    </thead>
    <tbody>
        {cartList.map((header) => (
            
            <tr key={header.id}>
                <td>{header.name}</td>
                <td>{header.categoria}</td>
                <td>{header.cantidad}</td>
                <td>{header.price}</td>
                <td>{header.price * header.cantidad}</td>
                <td><Button variant="danger" size="sm" onClick={() => handlerDeleted(header.id)}>X</Button></td>
            </tr>
          ))}
       
    </tbody>
  </Table>
  <Button variant="primary" size="sm" onClick={handlerVaciarCarrito}>Vaciar Carrito</Button>
   <Button variant="primary" size="sm" onClick={handlerOrder}>Comprar</Button>
   </>
  )
}
