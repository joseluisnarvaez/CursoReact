import {Container} from 'react-bootstrap/Container';
import {Row } from 'react-bootstrap/Row';
import {Col} from 'react-bootstrap/Col';
import {Image} from 'react-bootstrap/Image';
import { ItemCounter } from '../ItemCounter';
import { useCartContext } from '../../Context/CartContext';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';


export const ItemDetail = ({producto}) => {
  
  const {addProduct} =  useCartContext()

  const [compro, setCompro] = useState(false)

  const onAdd = (cantidad) => {
    addProduct({...producto , cantidad})
    setCompro(true)
  }

  return (
    <>
      <div className='col-12 text-center mt-5'>
          <h1>Detalle Producto</h1>
      </div>
      <br />
      <br />
      <br />
      <Container>
        <Row>
          <Col xs={6} md={4}>
            <Image src={producto.imageUrl} rounded />
            <h2>{producto.name}</h2>
          </Col>
          <Col md={6} xl={5} >
                <h4>Descripcion: {producto.description}</h4>
                
                <h4>Precio: {producto.price}</h4>
                {
                  producto.stock === 0? 
                    <h4>Sin Stock</h4>: 
                    <h4>Stock: {producto.stock}</h4>
                }
                {compro ? 
                    <div>
                      <Link to='/'><Button >Seguir Comprando</Button></Link>
                      <Link to='/carrito'><Button > Ir al carrito</Button></Link>
                    </div>

                  :
                  producto.stock === 0?  <div></div>: 
                    <ItemCounter onAdd={onAdd} inicial={1} stock= {producto.stock} />
                }

                
                
          </Col>
        </Row>
      </Container>
    </>
  )
}
