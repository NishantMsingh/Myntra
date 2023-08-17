import React from 'react';
const PaymentModes = () => {
  return (
    <div className='control-offer '>
      <div className="row justify-content-center align-items-start">
        <div className="col-lg-4 col-md-4 col-sm-4">
          <button className='w-100 payment-button active'> Recomanded</button>
          <button className='w-100 payment-button'> Flipkart pay later</button>
          <button className='w-100 payment-button'> Cash On Delivery (Cash/UPI)</button>
          <button className='w-100 payment-button'> Credit/Debit Card</button>
          <button className='w-100 payment-button'> PhonePay / GooglePay/BHIM UPI</button>
          <button className='w-100 payment-button'> Paytm/Wallets</button>
          <button className='w-100 payment-button'> Net Banking</button>
          <button className='w-100 payment-button'> EMI / Pay Later</button>
        </div>
        <div className="col-lg-8 col-md-8 col-sm-8 pt-3 ">Column</div>  
      </div>
    </div>
  );
};
export default PaymentModes;
