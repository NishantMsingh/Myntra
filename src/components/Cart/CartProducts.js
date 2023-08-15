import React from 'react'
import CartProductCard from './CartProductCard'
const CartProducts = () => {
  return (
    <div className="col-lg-9 col-sm-12 col-md-12 border-right mx-hight">

          <div className='address'>
             
          </div>
          <div className='cart-Product-list mt-1'> 
                  <CartProductCard/>
                  <CartProductCard/>
                  <CartProductCard/>
                  <CartProductCard/>
          </div>
   </div>
  )
}

export default CartProducts
