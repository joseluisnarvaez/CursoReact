import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import Button from 'react-bootstrap/Button';

const CartWidget = () => {

    return (
        <Button variant="primary"  style={{ backgroundColor: '#f0c040' }}>
          <FaShoppingCart  />
        </Button>
      
    );
};

export default CartWidget;
