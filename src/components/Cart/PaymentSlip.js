import React from 'react'
import {BsTags} from "react-icons/bs"
import AddressModal from './AddressModal'
import PropTypes from 'prop-types';
import { useContext } from 'react';
import CartContext from '../../context/Cart-context';
const PaymentSlip = (props) => {
   const [modalShow, setModalShow] = React.useState(false);
   const ctx=useContext(CartContext);
  return (
  <>
    <div className="col-lg-3 col-sm-12 col-md-12  text-start pt-3 custom-padding-left  pt-5">
              <sup className='cartBold'>COUPON</sup>
              <div className='d-flex align-items-ceter justify-content-between p-1'>
                 <span className='cartBold'> <BsTags/>  Apply coupons</span>
               <span className='fs-10 coupon-button'>Apply</span>
              </div>
              <hr/>
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
                 <span className='fs-10 myntra-text'>₹99</span>
              </div>
              <hr/>
              <div className='d-flex align-items-ceter justify-content-between p-1'>
                 <span className='cartBold' >Total Amount</span>
                 <span className='cartBold'>₹{ctx.totalAmount}</span>
              </div>
              <button className='place-order-btn' onClick={() => setModalShow(true)}> Place Order</button>
            </div>
            <AddressModal   show={modalShow}
        onHide={() => setModalShow(false)} addressHandler={props.addressHandler}/>
  </>
  )
}
PaymentSlip.propTypes={
   addressHandler: PropTypes.func.isRequired,
}
export default PaymentSlip
