import React from 'react'
import PaymentTypes from './PaymentTypes'
import FinalPayment from './FinalPayment'
const Payment = () => {
  return (
    <div className='container-fluid'>
    <div className=" container row  justify-content-center align-items-end g-2 rap-rev min-hight">  
    <PaymentTypes/>
     <FinalPayment/> 
    </div>
</div>
  )
}

export default Payment
