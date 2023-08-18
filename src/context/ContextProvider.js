import React, { useState } from 'react';
import PropTypes from 'prop-types';
import CartContext from './Cart-context';

const CartProvider = (props) => {
  const [items, setItems] = useState([]);
  const [total, SetTotal] = useState(0);
 
  const updateCartItem = (productToUpdate) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.productCode === productToUpdate.productCode
          ? { ...item, quantity: item.quantity + 1 } 
          : item
      )
    );
    SetTotal((prev) => prev + 1);
    alert("Item added to the card");
  };

  const addToCart = (prod) => {
    const existingItem = items.find((item) => item.productCode === prod.productCode);
    if (existingItem) {
      if(existingItem.quantity<5)
      {
        updateCartItem(existingItem);
      }
      else{
        alert("You can only add 5 quantity");
      }
     
    } else {
      setItems((prevItems) => [...prevItems, { ...prod, quantity: 1 }]);
      SetTotal((prev) => prev + 1);
      alert("Item added to the card");
    }
  };

const removeHandler=(product)=>{
   const updatedProducts=items.filter(value=>{value.productCode!==product.productCode})
  setItems((updatedProducts));
  SetTotal((prev) => prev -product.quantity );
}


  const contextValue = {
    productCount:total,
    product: items,
    addToC: addToCart,
    removeFromCart:removeHandler,
  };

  return <CartContext.Provider value={contextValue}>{props.children}</CartContext.Provider>;
};

CartProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default CartProvider;
