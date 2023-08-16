import React from 'react'
import PaymentSlip from './PaymentSlip'
import CartProducts from './CartProducts'

const CartCheckOut = () => {
  return (
    <div className='container-fluid min-hight'>
        <div className=" container row  justify-content-center align-items-end g-2 rap-rev">
           
            <CartProducts/>
            <PaymentSlip/>
          
           
        </div>
    </div>
  )
}

export default CartCheckOut
