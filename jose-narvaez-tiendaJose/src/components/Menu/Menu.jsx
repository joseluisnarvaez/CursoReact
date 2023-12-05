import {CartWidget} from '../cartWidget/Carrito';
import {Container} from 'react-bootstrap/Container';
import {Nav} from 'react-bootstrap/Nav';
import {Navbar} from 'react-bootstrap/Navbar';
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
