import { useState } from 'react'
import { useCartContext } from '../Context/CartContext'
import {Table, Button, Container, Row, Col} from "react-bootstrap";
import { saveOrder } from '../../fuctions/FirebasesConf';
import { Alert } from '../Alerts/AlertConft';
import { Link } from 'react-router-dom';

export const Cart = () => {

    const {cartList, totalCarrito,vaciarCarrito, eliminaProducto} =  useCartContext()
    const [showAlert, setShowAlert] = useState(false);
    const [alertVariant, setAlertVariant] = useState('success');
    const [alertMessage, setAlertMessage] = useState('');
    const [formDatos, setFormDatos] = useState({
      name: '',
      phone: '',
      email: '',
  }); 
  const handleInputChange = (event) => {

    if(event.target.name === 'repetirEmail'){
      if(event.target.value !== formDatos.email){
        setAlertVariant('danger');
        setAlertMessage('Los email no coinciden');
        setShowAlert(true);
      }
  }
    setFormDatos({
      ...formDatos,
      [event.target.name]: event.target.value,
    });
    
}

  const validarFormulario = () => {
    const { name, phone, email, repetirEmail } = formDatos;

    if (!name || !phone || !email )  {
      setAlertVariant('danger');
      setAlertMessage('Por favor, complete todos los campos.');
      setShowAlert(true);
      return false;
    }
    if (email !== repetirEmail) {
      setAlertVariant('danger');
      setAlertMessage('Los correos electrónicos no coinciden.');
      setShowAlert(true);
      return false;
    }
    return true;
  };
    const handlerOrder = async (event) => {
      if(!validarFormulario()){ return}
      console.log(formDatos)
        event.preventDefault()
        const order = {}
        order.buyer = formDatos
        order.item = cartList.map(({id, name,price}) =>  ({id,name,price}))
        order.total = totalCarrito
        console.log(order)
        saveOrder(order).then((order) => {
              vaciarCarrito()
              console.log(order)
              setAlertVariant('success');
              setAlertMessage(`¡Compra realizada con éxito! ID de la compra es: ${order.id}`);
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
  <Container>
  {totalCarrito !== 0 && 
   <Row>
        <Col>Precio Total:</Col>
        <Col>{totalCarrito}</Col>
  </Row>}
  </Container>  
  
    
   {totalCarrito === 0? (
        <div>
          <Link to='/'><Button >Seguir Comprando</Button></Link>
        </div>
      ) : (     <div> 
          <Button variant="primary" size="sm" onClick={handlerVaciarCarrito}>Vaciar Carrito</Button>
          
        </div>
        )
      }
            
       <Container>
        {totalCarrito !== 0 && 
        <form >
          <Row>
          <Col><label>Nombre</label></Col>
          <Col><input type="text" placeholder="Nombre" name='name' value={formDatos.name}  onChange={handleInputChange} /></Col>
          </Row>
          
          <Row>
          <Col><label>telefono</label></Col>
          <Col><input type="text" placeholder="telefono" name='phone'  value={formDatos.phone}   onChange={handleInputChange} /></Col>
          </Row>
          <Row>
          <Col><label>email</label></Col>
          <Col> <input type="text" placeholder="email" name='email'  value={formDatos.email}   onChange={handleInputChange} /></Col>
          </Row>
          <Row>
          <Col><label>Repetir email</label></Col>
          <Col><input type="text" placeholder="Repetir email" name='repetirEmail'    onChange={handleInputChange} /></Col>
          </Row>
          <Row>
          <Col><Button variant="primary" size="sm" onClick={handlerOrder}> Terminar compra</Button></Col>
          </Row>
          </form>
            }
        </Container>
        
                
   </>
  )
}
