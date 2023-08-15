import React from 'react'
import CartHeader from './CartHeader'
import CartFooter from './CartFooter'

import CartCheckOut from './CartCheckOut'
import "./Cartmain.css"
const CartParent = () => {
  return (
    <div className='container-fluid'>
      <CartHeader/>
      <CartCheckOut/>
      <CartFooter/>
    </div>
  )
}

export default CartParent
