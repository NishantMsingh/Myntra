import React, { useState } from "react";
import product11 from "../Assets/Images/product11.png";
import product12 from "../Assets/Images/product12.png";
import product13 from "../Assets/Images/product13.png";
import product14 from "../Assets/Images/product14.png";
import { LiaShoppingBagSolid } from "react-icons/lia";
import { TbTruckDelivery } from "react-icons/tb";
import { FaMapMarkerAlt } from "react-icons/fa";
import { CiDeliveryTruck } from "react-icons/ci";
import { GiPayMoney } from "react-icons/gi";
import { FaExchangeAlt } from "react-icons/fa";
import { useRef } from "react";
import "./Product.css";
const Product = () => {
  const [pin,setPin] =useState();
  const PincodeHandler=(e)=>{
    if(e.target.value.length>6)
    {
      setPin("");
    }
    else
    {
      setPin(e.target.value);
    }
  }
  const ResetAddressHandler=()=>{
    console.log("Reset");
  } 
  return (
    <div class="container mt-4">
      <div class="row">
        <div class="col-lg-8 col-sm-12">
          <h6 className="mobile tm">Scroll left</h6>
          <div class="d-flex custom-scrollbar overflow-auto">
            <img src={product11} alt="WROGN" class="img-thumbnail" />
            <img src={product12} alt="WROGN 2" class="img-thumbnail" />
            <img src={product13} alt="WROGN 3" class="img-thumbnail" />
            <img src={product14} alt="WROGN 4" class="img-thumbnail" />
          </div>
        </div>

        <div class="col-lg-4 col-sm-12 pt-3">
          <h2 className="bold mb-2 product-title">WROGN</h2>
          <h6 className="slate mb-2 fs-5">
            Off-White Green Lightweight Printed Pure Cotton T-shirt
          </h6>
          <div className="ratting-container bold mb-5">
            <span class="rating ">
              ⭐<span className="slate"> 3.5</span>
            </span>
            <span class="sells slate"> | 4.56K Rattings</span>
          </div>
          <hr />
          <div className="price pt-3 bold">
            {" "}
            <h3>₹506 </h3>{" "}
            <h6 className="slate ms-4">
              MRP <del>₹1299</del>{" "}
              <span className="offer">&#91;61% OFF&#93;</span>
            </h6>{" "}
          </div>
          <span className="bold">inclusive of all taxes</span>
          <p class="select-size">SELECT SIZE</p>
          <div class="size-options mt-3 mb-3">
            <label className="bold">
              <input type="radio" name="size" value="S" /> S
            </label>
            <label className="bold">
              <input type="radio" name="size" value="M" /> M
            </label>
            <label className="bold">
              <input type="radio" name="size" value="L" /> L
            </label>
            <label className="bold">
              <input type="radio" name="size" value="XL" /> XL
            </label>
          </div>

          <button class="addToCart">
            {" "}
            <LiaShoppingBagSolid fontSize={"1.3rem"} />
            Add to Cart
          </button>

          <hr />
          <div class="delivery-options pt-3">
            <h6 className="bold">
              DELIVERY OPTIONS <CiDeliveryTruck fontSize={"2.3rem"} />
            </h6>
            <div className="border-1 d-flex flex-row align-items-center rounded  pt-2 pb-2 mb-3">
              <FaMapMarkerAlt fontSize={"2.3rem"} />
              <form>
                <input
                value={pin}
                onChange={PincodeHandler}
                max={6}
                  type="text"
                  className="pincode rounded bold"
                  placeholder="Enter pin code"
                />
              </form>
              <span className="bold tm ms-1 pointer" onClick={ResetAddressHandler}>CHANGE</span>
            </div>
            <span className="delivery-time">
              <TbTruckDelivery fontSize={"2.7rem"} />
              <p className="bold ms-4 text-dark">Get it by Fri, Aug 04</p>
            </span>
            <span className="delivery-time">
              <GiPayMoney fontSize={"2.7rem"} />
              <p className="bold ms-4 text-dark">Pay on delivery available</p>
            </span>
            <span className="delivery-time">
              <FaExchangeAlt fontSize={"2.7rem"} />
              <p className="bold ms-4 text-dark">
                Easy 14 days return & exchange available
              </p>
            </span>
            <span className="bold text-dark">Product Code: <span className="tm">22834606</span></span>  <br/>
            <span className="bold text-dark">Seller: <span className="tm">Sixth Sense</span></span>
            <p className="slate"> 100% Original Products</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
