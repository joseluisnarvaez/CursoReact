import React from 'react';
import CartWidget from '../cartWidget/Carrito';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function Menu() {
    return (
      
        <Navbar bg="dark" data-bs-theme="dark">
          <Container>
            <Navbar.Brand href="#home">Ecommerces</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="#home">Momis 1 </Nav.Link>
              <Nav.Link href="#features">Momis 2</Nav.Link>
              <Nav.Link href="#pricing">Momis 3</Nav.Link>
            </Nav>
            <CartWidget />
          </Container>
          </Navbar>
        
    );
}

export default Menu;
