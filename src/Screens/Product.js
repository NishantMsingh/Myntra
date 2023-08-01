import React from 'react'
import product11 from "../Assets/Images/product11.png"
import product12 from "../Assets/Images/product12.png"
import product13 from "../Assets/Images/product13.png"
import product14 from "../Assets/Images/product14.png"
import { LiaShoppingBagSolid } from 'react-icons/lia';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { CiDeliveryTruck } from 'react-icons/ci';

import "./Product.css";
const Product = () => {
  return (
    <div class="container mt-4">
    <div class="row">
      <div class="col-lg-8 col-sm-12">
      <h6 className='mobile tm'>Scroll left</h6>
        <div class="d-flex custom-scrollbar overflow-auto">
          <img src={product11} alt="Image 1" class="img-thumbnail"/>
          <img src={product12} alt="Image 2" class="img-thumbnail"/>
          <img src={product13} alt="Image 3" class="img-thumbnail"/>
          <img src={product14} alt="Image 4" class="img-thumbnail"/>
        </div>
      </div>

    
      <div class="col-lg-4 col-sm-12 pt-3">
        <h2 className='bold mb-2 product-title'>WROGN</h2>
         <h6 className='slate mb-2 fs-5'>Off-White Green Lightweight Printed Pure Cotton T-shirt</h6>
         <div className='ratting-container bold mb-5'>
         <span class='rating '>⭐<span className='slate'> 3.5</span></span>
        <span class='sells slate'> | 4.56K Rattings</span>
         </div>
         <hr/>
        <div className='price pt-3 bold'> <h3>₹506 </h3>  <h6 className='slate ms-4'>MRP <del>₹1299</del> <span className='offer'>&#91;61% OFF&#93;</span></h6> 	 </div>
         <span className='bold'>inclusive of all taxes</span>
        <p class="select-size">SELECT SIZE</p>
        <div class="size-options mt-3 mb-3">
          <label className='bold'><input type="radio" name="size" value="S"/> S</label>
          <label className='bold'><input type="radio" name="size" value="M"/> M</label>
          <label className='bold'><input type="radio" name="size" value="L"/> L</label>
          <label className='bold'><input type="radio" name="size" value="XL"/> XL</label>
        </div>

        <button class="addToCart"> <LiaShoppingBagSolid fontSize={"1.3rem"}/>Add to Cart</button>

        <hr/>
        <div class="delivery-options pt-3">
          <h6 className='bold'>DELIVERY OPTIONS <CiDeliveryTruck fontSize={"1.3rem"}/></h6>
          <div className='border-1 d-flex flex-row align-items-center rounded ps-3 pe-3 pt-2 pb-2'>
  <FaMapMarkerAlt fontSize={"1.3rem"}/>
  <form>
    <input type='text' className='pincode rounded' placeholder='Enter pin code'/>
  </form>
  <span className='bold tm ms-5 pointer'>CHECK</span>
</div>
           <span className='delivery-time'><p>Get it by Fri, Aug 04</p></span>
          <p>Pay on delivery available</p>
          <p>Easy 14 days return & exchange available</p>
        </div>
        <div class="customer-reviews">
          <p>Customer Reviews (344)</p>
          <p>3</p>
          <p>T-shirt Quality is Good but the Color is Too much Lite than the Pictures...</p>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Product
