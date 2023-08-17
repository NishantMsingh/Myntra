import React from 'react'
import PaymentSlip from './PaymentSlip'
import CartProducts from './CartProducts'
import PropTypes from 'prop-types';
const CartCheckOut = (props) => {
  return (
    <div className='container-fluid'>
        <div className=" container row  justify-content-center align-items-end g-2 rap-rev">
           
            <CartProducts/>
            <PaymentSlip addressHandler={props.addressHandler}/>
          
           
        </div>
    </div>
  )
}
CartCheckOut.propTypes={
  addressHandler: PropTypes.func.isRequired,
}
export default CartCheckOut
