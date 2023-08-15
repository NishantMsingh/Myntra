import React from 'react'
import emptyweb from "../../Assets/Images/empty-bag.webp"
import empty from "../../Assets/Images/empty.png"
import { Link } from 'react-router-dom'

const EmptyCart = () => {
  return (
    <div className='container d-flex align-items-center justify-content-center flex-column empty-container'>
    <picture> 
  <source srcSet={emptyweb} type="image/webp"  className='empty-cart-img'/>
  <img src={empty} alt="Description of the image"/>
</picture>

      <div className='d-flex flex-column text-center'>
         <h5>Hey , it feels so light!</h5>
         <p>There is nothing in your bag. lets add</p>
         <Link to="/" className='empty-button '> Add it from your wishlist</Link>
      </div>
    </div>
  )
}

export default EmptyCart
