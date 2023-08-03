import React from 'react'
import "./ProductCard.css"
import {Link} from "react-router-dom";
import PropTypes from "prop-types";
import { useDispatch } from 'react-redux';
import productAction from "../Store/poductSlice";
const ProductCard = (props) => {
const dispatch=useDispatch();
 const ProductHnadler=(value)=>{
    dispatch(productAction.actions.showProduct(value));
    localStorage.setItem("product",JSON.stringify(value));
}
  return (
    <div className="product-card">
    <img className="product-image" src={props.product.imageCard} alt="Product"/>
    <div className="product-details">
      <div className="product-name">{props.product.title}</div>
      <div className="product-description">{props.product.description}</div>
      <div className='Card-hidden'>
    

          <Link to={{ pathname: `/product/${props.product.productCode}`}}>
            <button className="product-view-btn" onClick={()=>{ProductHnadler(props.product)}}>View</button>
          </Link>
                
                
       <div><span className="product-price">{props.product.curPrice} </span>
      <span className="product-mrp">₹{props.product.prevPrice} </span>
      <span className="product-discount">[{props.product.offer} ]</span></div>
      </div>
    </div>
  </div>
  )
}
ProductCard.propTypes = {
  product: PropTypes.shape({
    imageCard: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    productCode: PropTypes.string.isRequired,
    curPrice: PropTypes.number.isRequired,
    prevPrice: PropTypes.number.isRequired,
    offer: PropTypes.string.isRequired,
  }).isRequired,
};
export default ProductCard
