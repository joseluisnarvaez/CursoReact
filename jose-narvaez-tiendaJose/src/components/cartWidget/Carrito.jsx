import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';

const CartWidget = () => {

    const buttonStyle = {
        display: 'flex',
        alignItems: 'center',
        padding: '10px',
        backgroundColor: '#f0c040',
        color: 'white',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
      };
      
    const iconStyle = {
        marginRight: '5px',
      };
    return (
        <button style={buttonStyle}>
        <FaShoppingCart style={iconStyle} />
      </button>
    );
};

export default CartWidget;
