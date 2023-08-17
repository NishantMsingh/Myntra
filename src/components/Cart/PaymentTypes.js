import React from 'react'
import Offer from './PaymentTypes/Offer'
import PaymentModes from './PaymentTypes/PaymentModes'

const PaymentTypes = () => {
  return (
    <div className='container-fluid col-lg-8 col-md-6 col-sm-12 custom-padding-left pt-3'>
    <Offer/>
    <h5 className='slate pt-4 pb-4'>Choose Payment mode</h5>
    <PaymentModes/>
    </div>
  )
}

export default PaymentTypes
