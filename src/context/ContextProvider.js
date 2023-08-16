import React, { useState } from 'react';
import PropTypes from 'prop-types'; 
import CartContext from './Cart-context';
const CartProvider = (props) => {
  const [items,setItem]=useState([]);
  
  const CartHandler = (value) => {
    setItem((prev) => {
    return [...prev, value];
  });
  };
  const contextValue = {
    product: items,
    addtoCart: CartHandler,
  };
  return (
    <CartContext.Provider value={contextValue}>
      {props.children}
    </CartContext.Provider>
  );
};
CartProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
export default CartProvider;
