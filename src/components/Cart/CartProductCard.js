import React from 'react'
import img from "../../Assets/Images/productmen11.png";
import {RxCross2} from "react-icons/rx"
const CartProductCard = () => {
  return (
     <div className='d-flex flex-row justify-content-start product-cart-list-control rounded ovr-hide'>
      <img src={img} alt='' className='rounded'/>
      <div className='d-flex flex-column w-100'>
      <div className="p-2 d-flex align-items-center justify-content-between ">
  <span className="cartBold">Title</span>
  <span><RxCross2/></span>
</div>
 <p className="ps-2">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus, earum. </p>
 <div className="ps-2">
  <span>SIZE</span>
  <span>QUANTITY</span>
 </div>
      </div>
     </div>

  
  )
}

export default CartProductCard
