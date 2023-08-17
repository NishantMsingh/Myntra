import React from 'react';
import {PiShootingStarFill} from "react-icons/pi"
import {MdMoney} from "react-icons/md"
import {SiFlipkart} from "react-icons/si"
import {BsCreditCard} from "react-icons/bs"
import {FaGooglePay} from "react-icons/fa"
import {BsWallet} from "react-icons/bs"
import {BsBank} from "react-icons/bs"
const PaymentModes = () => {
  return (
    <div className='control-offer '>
      <div className="row justify-content-center align-items-start">
        <div className="col-lg-6 col-md-6 col-sm-6 ">
          <button className='w-100 payment-button active text-start'><PiShootingStarFill/> Recomanded</button>
          <button className='w-100 payment-button text-start'><SiFlipkart/> Flipkart pay later</button>
          <button className='w-100 payment-button text-start'> <MdMoney/> Cash On Delivery (Cash/UPI)</button>
          <button className='w-100 payment-button text-start'> <BsCreditCard/> Credit/Debit Card</button>
          <button className='w-100 payment-button text-start'> <FaGooglePay/> PhonePay / GooglePay/BHIM UPI</button>
          <button className='w-100 payment-button text-start'> <BsWallet/> Paytm/Wallets</button>
          <button className='w-100 payment-button text-start'> <BsBank/> Net Banking</button>
          <button className='w-100 payment-button text-start'> <SiFlipkart/> EMI / Pay Later</button>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-6 pt-3 ">
          <h5 className='slate '>Recommanded Payment Options</h5>
          <div className="form-check bg-myntra-light rounded align-items-center d-flex pointer mt-2 p-3">
  <input className="form-check-input ms-1 me-1 pointer" type="radio" name="flexRadioDefault1" id="flexRadioDefault1"/>
  <label className="form-check-label  fs-4 slate pointer" htmlFor="flexRadioDefault1">
   COD
  </label>
</div>
<div className="form-check bg-myntra-light rounded align-items-center d-flex pointer mt-2 p-3">
  <input className="form-check-input ms-1 me-1 pointer " type="radio" name="flexRadioDefault1" id="flexRadioDefault2" />
  <label className="form-check-label fs-4 slate pointer" htmlFor="flexRadioDefault2">
   GooglePay
  </label>
</div>
          </div>  
      </div>
    </div>
  );
};
export default PaymentModes;
