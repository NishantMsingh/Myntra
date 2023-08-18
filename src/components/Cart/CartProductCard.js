// CartProductCard.js
import React from 'react';

import { RxCross2 } from "react-icons/rx";
import PropTypes from "prop-types";
import { useContext } from 'react';
import CartContext from '../../context/Cart-context';

const CartProductCard = (props) => {
  const ctx=useContext(CartContext);
  const removeItemHandler = () => {
    let con = window.confirm("Are you sure?");
    console.log(con);
    if(con)
    {
      ctx.removeFromCart(props.products);
    }
  };

  return (
    <div className='d-flex flex-row justify-content-start product-cart-list-control'>
      <img src={props.products.imageCard} alt='' className='' />
      <div className='d-flex flex-column w-100'>
        <div className="p-2 d-flex align-items-center justify-content-between ">
          <span className="cartBold">{props.products.title}</span>
          <span onClick={removeItemHandler} className='pointer'><RxCross2 /></span>
        </div>
        <p className="ps-2 pos-card-rel">{props.products.description}</p>
        <p className="ps-2 pos-card-rel-3"><span className='offer-price'>Sold by :</span> {props.products.seller} </p>
        <p className='ps-2  pos-card-rel-2'>
          <span>Quantity</span>
          <select name="quantity" value={props.products.quantity} className='qty ms-2 me-2' disabled>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
          <span>Size</span>
          <select name="size" value={props.products.size}  className='qty ms-2 ' disabled>
            <option value="M">M</option>
            <option value="S">S</option>
            <option value="L">L</option>
            <option value="XL">XL</option>
          </select>
        </p>
        <p className='pos-card-rel-4 ps-2'>
          <span className='cur-price'>${props.products.curPrice}</span> <del> ${props.products.prevPrice}</del> <span className='offer-price'>[{props.products.offer}]</span>
        </p>
      </div>
    </div>
  );
};

CartProductCard.propTypes = {
  products: PropTypes.array.isRequired,
};

export default CartProductCard;
