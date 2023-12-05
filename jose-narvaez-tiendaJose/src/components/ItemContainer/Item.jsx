import Card from 'react-bootstrap/Card';
import { NavLink } from 'react-router-dom';
export const Item = ({product}) => {
    
  return (
    <Card  >
        <Card.Img variant="top" src={product.imageUrl} />
        <Card.Body>
          <Card.Title>{product.name}</Card.Title>
          <Card.Text>
              Precio: {product.price}
              <br />
               Stock: {product.stock}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
            <div className='card-footer'>
                <NavLink className='btn btn-outline-dark w-100'  to= {'/detalle/'+product.id} >Detalle</NavLink>
            </div>
        </Card.Footer>
      </Card>
        
  )
}
