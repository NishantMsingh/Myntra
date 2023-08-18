import React, { useState } from 'react';
import PropTypes from 'prop-types';
import CartContext from './Cart-context';

const CartProvider = (props) => {
  const [items, setItems] = useState([]);
  const [total, SetTotal] = useState(0);
  const [amount, SetAmount] = useState(0);
  const [discount, SetDiscount] = useState(0);
  const [MRP, SetMRP] = useState(0);
 
  const updateCartItem = (productToUpdate) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.productCode === productToUpdate.productCode
          ? { ...item, quantity: item.quantity + 1 } 
          : item
      )
    );
    SetTotal((prev) => prev + 1);
    SetAmount((prev) => prev + Number(productToUpdate.curPrice));
      SetDiscount((prev) => prev +(Number(productToUpdate.prevPrice)-Number(productToUpdate.curPrice)));
      SetMRP((prev) => prev + Number(productToUpdate.prevPrice));
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
      SetAmount((prev) => prev + Number(prod.curPrice));
      SetDiscount((prev) => prev +(Number(prod.prevPrice)-Number(prod.curPrice)));
      SetMRP((prev) => prev + Number(prod.prevPrice));
      alert("Item added to the card");
    }
  };

const removeHandler=(product)=>{
   const updatedProducts=items.filter(value=>{ return value.productCode!==product.productCode})
  setItems((updatedProducts));
  SetTotal((prev) => prev -product.quantity );
  SetAmount((prev) => prev -Number(product.curPrice));
  SetMRP((prev) => prev -Number(product.prevPrice));
  SetDiscount((prev) => prev -Number(product.prevPrice));
}


  const contextValue = {
    totalAmount:Number(amount)+99,
    totalDiscount:discount,
    productCount:total,
    product: items,
    TotalMRP:MRP,
    addToC: addToCart,
    removeFromCart:removeHandler,
  };

  return <CartContext.Provider value={contextValue}>{props.children}</CartContext.Provider>;
};

CartProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default CartProvider;
