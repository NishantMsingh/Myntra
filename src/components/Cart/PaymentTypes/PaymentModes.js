import React, { useRef, useState } from "react";
import { PiShootingStarFill } from "react-icons/pi";
import { MdMoney } from "react-icons/md";
import { SiFlipkart } from "react-icons/si";
import { BsCreditCard } from "react-icons/bs";
import { FaGooglePay } from "react-icons/fa";
import { BsWallet } from "react-icons/bs";
import { BsBank } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
const PaymentModes = () => {
  const navigate=useNavigate();
  const [selectedOption, setSelectedOption] = useState(null);
 const transactionID=useRef();


const placeOrder=(paymode)=>{
  if(paymode==="COD")
  {
    navigate("/ConfirmedOrder");
  }
  else if(paymode==="GPAY")
  {
    let transction=transactionID.current.value;
    if(transction.length===16)
    {
      navigate("/ConfirmedOrder");
    }
    else
    {
      alert("The transaction id should have 16 digits")
    }
  }
}

  const handleRadioClick = (option) => {
    setSelectedOption(option);
    console.log(option);
  };
  return (
    <div className="control-offer ">
      <div className="row justify-content-center align-items-start">
        <div className="col-lg-6 col-md-12 col-sm-12 ">
          <button className="w-100 payment-button active text-start">
            <PiShootingStarFill /> Recomanded
          </button>
          <button className="w-100 payment-button text-start">
            <SiFlipkart /> Flipkart pay later
          </button>
          <button className="w-100 payment-button text-start">
            {" "}
            <MdMoney /> Cash On Delivery (Cash/UPI)
          </button>
          <button className="w-100 payment-button text-start">
            {" "}
            <BsCreditCard /> Credit/Debit Card
          </button>
          <button className="w-100 payment-button text-start">
            {" "}
            <FaGooglePay /> PhonePay / GooglePay/BHIM UPI
          </button>
          <button className="w-100 payment-button text-start">
            {" "}
            <BsWallet /> Paytm/Wallets
          </button>
          <button className="w-100 payment-button text-start">
            {" "}
            <BsBank /> Net Banking
          </button>
          <button className="w-100 payment-button text-start">
            {" "}
            <SiFlipkart /> EMI / Pay Later
          </button>
        </div>
        <div className="col-lg-6 col-md-12 col-sm-12  ">
          <h5 className="slate ">Recommended Payment Options</h5>
          <div
            className={`bg-myntra-light rounded ${
              selectedOption === "COD" ? "" : "pay-hight"
            }`}
          >
            <div
              className={`form-check rounded align-items-center d-flex pointer mt-2 p-1`}
             
            >
              <input
                className="form-check-input ms-1 me-1 pointer"
                type="radio"
                name="flexRadioDefault1"
                id="flexRadioDefault1"
                onClick={() => handleRadioClick("COD")}
              />
              <label
                className="form-check-label  fs-6 slate pointer"
                htmlFor="flexRadioDefault1"
                onClick={() => handleRadioClick("COD")}
              >
                Cash on delivery (Cash/Upi) <MdMoney />
              </label>
              <br />
            </div>
            <div className={selectedOption === "COD" ? "opacity-show" : "opacity-hide"}>
              <p className="fs-6 ms-1">
                Rs 10 will get charged extra for the Pay on Delivery. You can
                pay via cash/upi while delivery
              </p>
              <button onClick={()=>{placeOrder("COD")}} className="slate boldCart empty-button ps-2 pe-2  ms-1 mb-3 w-90 rounded">
                {" "}
                PLACE ORDER
              </button>  
            </div>
          </div>
          <div
            className={`bg-myntra-light rounded mt-2 ${
              selectedOption === "GooglePay" ? "" : "pay-hight"
            }`}
          >
            <div
              className={`form-check align-items-center d-flex pointer mt-2 p-3`}
            
            >
              <input
                className="form-check-input ms-1 me-1 pointer"
                type="radio"
                name="flexRadioDefault1"
                id="flexRadioDefault2"
                onClick={() => handleRadioClick("GooglePay")}
              />
              <label
                className="form-check-label fs-6 slate pointer"
                htmlFor="flexRadioDefault2"
                onClick={() => handleRadioClick("GooglePay")}
              >
                GooglePay
              </label>
            </div>
            <div className={selectedOption === "GooglePay" ? "opacity-show" : "opacity-hide"}>
              <p className="fs-6 ms-1 text-light">
              <a href='upi://nishantkumarsingh16019@okhdfcbank'>
               nishantkumarsingh16019@okhdfc<br/>bank
              </a>
              </p>
              <input ref={transactionID} type='text' placeholder="Transaction id" className="w-90 ms-1 mb-1"/> 
              <button onClick={()=>{placeOrder("GPAY")}} className="slate boldCart empty-button ps-2 pe-2  ms-1 mb-3 w-90 rounded">
                {" "}
                PLACE ORDER
              </button>  
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentModes;
