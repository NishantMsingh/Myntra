import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import "./Confirm.css";
import {BsBagCheck} from "react-icons/bs";
const ConfirmedOrder = () => {
  const history = useNavigate();
  const [secondsRemaining, setSecondsRemaining] = useState(10);

  useEffect(() => {
    const timer = setInterval(() => {
      if (secondsRemaining > 1) {
        setSecondsRemaining(secondsRemaining - 1);
      } else {
        clearInterval(timer);
 
        // history('/');
      }
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, [secondsRemaining, history]);
 let deliveryDate="3 september";
  return (
    <div className="confirmed-order">
       <div className='d-flex flex-column align-items-center'>
       <h2 className="order-heading">Thank you for shoping <BsBagCheck/></h2>
        <div className='text-start border border-success rounded p-4'>
           <h5 className='text-success'>Order ID:CLONEMYNTRA0121</h5>
      <p className="delivery-date">Delivery Date: {deliveryDate}</p>
      <p className="redirect-timer">Redirecting in {secondsRemaining} seconds...</p> </div>
       </div>
    </div>
  );
};

export default ConfirmedOrder;
