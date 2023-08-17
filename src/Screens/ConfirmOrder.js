import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import "./Confirm.css";
const ConfirmedOrder = () => {
  const history = useNavigate();
  const [secondsRemaining, setSecondsRemaining] = useState(10);

  useEffect(() => {
    const timer = setInterval(() => {
      if (secondsRemaining > 1) {
        setSecondsRemaining(secondsRemaining - 1);
      } else {
        clearInterval(timer);
 
        history('/');
      }
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, [secondsRemaining, history]);
 let deliveryDate="3 september";
  return (
    <div className="confirmed-order">
      <h2 className="order-heading">Order Confirmed</h2>
      <p className="delivery-date">Delivery Date: {deliveryDate}</p>
      <p className="redirect-timer">Redirecting in {secondsRemaining} seconds...</p>
    </div>
  );
};

export default ConfirmedOrder;
