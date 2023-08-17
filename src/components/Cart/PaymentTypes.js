import React from 'react'
import Offer from './PaymentTypes/Offer'
import PaymentModes from './PaymentTypes/PaymentModes'

const PaymentTypes = () => {
  return (
    <div className='container-fluid col-lg-8 col-md-6 col-sm-12 custom-padding-left  pt-5 '>
    <Offer/>
    <h5 className='slate'>Choose mayment mode</h5>
    <PaymentModes/>
    </div>
  )
}

export default PaymentTypes
