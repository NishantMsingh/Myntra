import React from 'react'


const FinalPayment = () => {
   
  return (
  <>
    <div className="col-lg-3 col-sm-12 col-md-6  text-start pt-3 custom-padding-left  pt-5 min-hight">
              
              <sup className='cartBold'>Price details(0)</sup>
              <div className='d-flex align-items-ceter justify-content-between p-1'>
                 <span > Total MRP</span>
                 <span className='fs-10'>$1200</span>
              </div>
              <div className='d-flex align-items-ceter justify-content-between p-1'>
                 <span > Discount on MRP</span>
                 <span className='fs-10 text-success'>-$100</span>
              </div>
              <div className='d-flex align-items-ceter justify-content-between p-1'>
                 <span > Coupon Discount</span>
                 <span className='fs-10 myntra-text'>Apply Coupon</span>
              </div>

              <div className='d-flex align-items-ceter justify-content-between p-1'>
                 <span > Convenience fee</span>
                 <span className='fs-10 myntra-text'>$20</span>
              </div>
              <hr/>
              <div className='d-flex align-items-ceter justify-content-between p-1'>
                 <span className='cartBold' >Total Amount</span>
                 <span className='cartBold'>$200</span>
              </div>
           
            </div>
           
  </>
  )
}

export default FinalPayment
