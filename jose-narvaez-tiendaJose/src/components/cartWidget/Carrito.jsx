import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { useCartContext } from '../Context/CartContext';

const CartWidget = () => {
  const {totalProductos} =  useCartContext()
    return (
        <Button variant="primary"  style={{ backgroundColor: '#f0c040' }}>
          <Link to='/carrito'>
            {totalProductos}
            <FaShoppingCart  />
          </Link>
          
        </Button>
      
    );
};

export default CartWidget;
