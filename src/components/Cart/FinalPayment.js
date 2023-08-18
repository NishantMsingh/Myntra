import React from 'react'
import { useContext } from 'react'
import CartContext from '../../context/Cart-context'
const FinalPayment = () => {
   const ctx=useContext(CartContext);
  return (
  <>
    <div className="col-lg-3 col-sm-12 col-md-6  text-start pt-3 custom-padding-left  pt-5 min-hight">
              
              <sup className='cartBold'>Price details({ctx.productCount})</sup>
              <div className='d-flex align-items-ceter justify-content-between p-1'>
                 <span > Total MRP</span>
                 <span className='fs-10'>₹{ctx.TotalMRP}</span>
              </div>
              <div className='d-flex align-items-ceter justify-content-between p-1'>
                 <span > Discount on MRP</span>
                 <span className='fs-10 text-success'>-₹{ctx.totalDiscount}</span>
              </div>
              <div className='d-flex align-items-ceter justify-content-between p-1'>
                 <span > Coupon Discount</span>
                 <span className='fs-10 myntra-text'>Apply Coupon</span>
              </div>

              <div className='d-flex align-items-ceter justify-content-between p-1'>
                 <span > Convenience fee</span>
                 <span className='fs-10 myntra-text'>+₹99</span>
              </div>
              <hr/>
              <div className='d-flex align-items-ceter justify-content-between p-1'>
                 <span className='cartBold' >Total Amount</span>
                 <span className='cartBold'>₹{ctx.totalAmount}</span>
              </div>
           
            </div>
           
  </>
  )
}

export default FinalPayment
