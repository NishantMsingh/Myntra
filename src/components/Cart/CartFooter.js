import React from 'react'
import payment from "../../Assets/Images/payment.png"
const CartFooter = () => {
  return (
    <div className='container-fluid border-top border-secondary'>
  <div className='container d-flex align-items-center justify-content-between flex-wrap pt-4 '>
       <img src={payment} alt='Payment types'/>
       <h6>Need help? Contact us</h6>
    </div>
    </div>
  )
}

export default CartFooter
