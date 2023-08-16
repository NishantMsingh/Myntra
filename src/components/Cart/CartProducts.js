// CartProducts.js
import React from 'react';
import CartProductCard from './CartProductCard';
import { products } from "../../Assets/Address JSon/ProductsJSONWomes";

const CartProducts = () => {
  return (
    <div className="col-lg-9 col-sm-12 col-md-12 border-right mx-hight custom-padding-left  pt-5">
      <div className='address'></div>
      <div className='cart-Product-list mt-1'>
        {products.map(value => (
          <CartProductCard products={value} key={value.productCode} />
        ))}
      </div>
    </div>
  );
};

export default CartProducts;
