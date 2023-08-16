import React, { useState } from "react";
import { LiaShoppingBagSolid } from "react-icons/lia";
import { TbTruckDelivery } from "react-icons/tb";
import { FaMapMarkerAlt } from "react-icons/fa";
import { CiDeliveryTruck } from "react-icons/ci";
import { GiPayMoney } from "react-icons/gi";
import { FaExchangeAlt } from "react-icons/fa";
import "./Product.css";
import PropTypes from "prop-types";
const Product = () => {
const [pin, setPin] = useState("");
const currentProduct = JSON.parse(localStorage.getItem("product"));
const addtoCardHandler=()=>{

    alert("Item added to the card");
  }
  const PincodeHandler = (e) => {
    if (e.target.value.length > 6) {
      setPin("");
    } else {
      setPin(e.target.value);
    }
  };
  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-lg-8 col-sm-12">
          <h6 className="mobile tm">Scroll left</h6>
          <div className="d-flex custom-scrollbar overflow-auto">
            {currentProduct.images.map((image, index) => (
              <img key={index} src={image} alt={currentProduct.title} className="img-thumbnail" />
            ))}
          </div>
        </div>
        <div className="col-lg-4 col-sm-12 pt-3">
          <h2 className="bold mb-2 product-title">{currentProduct.title}</h2>
          <h6 className="slate mb-2 fs-5">{currentProduct.description}</h6>
          <div className="ratting-container bold mb-5">
            <span className="rating">
              ⭐<span className="slate"> {currentProduct.star}</span>
            </span>
            <span className="sells slate"> | {currentProduct.rating} Ratings</span>
          </div>
          <hr />
          <div className="price pt-3 bold">
            {" "}
            <h3>₹{currentProduct.curPrice} </h3>{" "}
            <h6 className="slate ms-4">
              MRP <del>₹{currentProduct.prevPrice}</del>{" "}
              <span className="offer">&#91;{currentProduct.offer}&#93;</span>
            </h6>{" "}
          </div>
          <span className="bold">inclusive of all taxes</span>
          <p className="select-size">SELECT SIZE</p>
          <div className="size-options mt-3 mb-3">
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
          <div className="addtoCartMobile">
          <button className="addToCart" onClick={addtoCardHandler}>
            {" "}
            <LiaShoppingBagSolid fontSize={"1.3rem"} />
            Add to Cart
          </button>
           <button className="addToCart wishlist-btn ms-2">
            {" "}
            <LiaShoppingBagSolid fontSize={"1.3rem"} />
            Add Wish List
          </button>
          </div>
          <hr />
          <div className="delivery-options pt-3">
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
              <span className="bold tm ms-1 pointer">
                CHANGE
              </span>
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
              <p className="bold ms-4 text-dark">Easy 14 days return & exchange available</p>
            </span>
            <span className="bold text-dark">
              Product Code: <span className="tm">{currentProduct.productCode}</span>
            </span>{" "}
            <br />
            <span className="bold text-dark">
              Seller: <span className="tm">{currentProduct.seller}</span>
            </span>
            <p className="slate">100% Original Products</p>
          </div>
        </div>
      </div>
    </div>
  );
};
Product.propTypes = {
  location: PropTypes.object.isRequired,
};
export default Product;

