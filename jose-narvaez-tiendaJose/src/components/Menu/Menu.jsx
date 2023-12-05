import CartWidget from '../cartWidget/Carrito';
import {Container, Nav, Navbar} from 'react-bootstrap';
import { NavLink } from 'react-router-dom';


function Menu() {
    return (
      
        <Navbar bg="dark" data-bs-theme="dark">
          <Container>
            <Navbar.Brand >
              <NavLink className={({isActive})=> isActive ? 'btn btn-white': 'btn' }  to='/'>Ecommerces</NavLink>
            </Navbar.Brand>
            
            <Nav className="me-auto">
              <NavLink className={({isActive})=> isActive ? 'btn btn-white': 'btn' }  to='/categoria/gorras'>Gorras</NavLink>
              <NavLink className={({isActive})=> isActive ? 'btn btn-white': 'btn' } to='/categoria/poleras'>poleras</NavLink>
              
            </Nav>
            <CartWidget />
            
          </Container>
          </Navbar>
        
    );
}

export default Menu;
