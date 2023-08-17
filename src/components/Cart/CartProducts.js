// CartProducts.js
import React from 'react';
import CartProductCard from './CartProductCard';
import { useContext } from "react";
import CartContext from "../../context/Cart-context";
const CartProducts = () => {
  const ctx=useContext(CartContext);
  return (
    <div className="col-lg-9 col-sm-12 col-md-12 border-right mx-hight custom-padding-left  pt-5  min-hight">
      <div className='address'>Address</div>
      <div className='cart-Product-list mt-1'>
        {ctx.product.map(value => (
          <CartProductCard products={value} key={value.productCode} />
        ))}
      </div>
    </div>
  );
};
export default CartProducts;
