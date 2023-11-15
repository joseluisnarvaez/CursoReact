import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import { ItemCounter } from '../ItemCounter';

export const ItemDetail = ({producto}) => {
  const onAdd = (cantidad) => {
    alert('Cantidad seleccionada: '+ cantidad)
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
                <h4>Stock: {producto.stock}</h4>
                <ItemCounter onAdd={onAdd} inicial={1} stock= {producto.stock} />
          </Col>
        </Row>
      </Container>
    </>
  )
}
