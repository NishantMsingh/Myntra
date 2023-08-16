// Header.js
import React, { useState } from "react";
import "./Header.css";
import { RiSearchLine } from "react-icons/ri";
import { CgProfile } from "react-icons/cg";
import { CgMenuRight } from "react-icons/cg";

import { BsFillBagFill } from "react-icons/bs";
import logo from "../../Assets/Images/Logo.png";
import { Link, NavLink } from "react-router-dom";
import { useContext } from "react";
import CartContext from "../../context/Cart-context";

const Header = () => {
  const islogged = false;
  const ctx=useContext(CartContext);
  const [menu, setMenu] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  const menuHandler = () => {
    if (window.innerWidth <= 1000) {
      setMenu(!menu);
    }
  };

  const handleSearchChange = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <header className="header-absolute bg-d">
      <div className="">
        <img src={logo} alt="LOGO" className="img-fluid w-10 me-3" />
      </div>
      <div className="d-flex align-items-center justify-content-between flex-row">
        <nav className={menu ? "heigh" : "dark"}>
          <span>
            {" "}
            <NavLink to="/Men" onClick={menuHandler}>
              MEN
            </NavLink>
          </span>
          <span>
            <NavLink to="/Women" onClick={menuHandler}>
              WOMEN
            </NavLink>
          </span>
          <span>
            <NavLink to="/Kid" onClick={menuHandler}>
              KID
            </NavLink>
          </span>
          <span>
            <NavLink to="/Home" onClick={menuHandler}>
              HOME & LIVING
            </NavLink>
          </span>
          <span>
            <NavLink to="/Beauty" onClick={menuHandler}>
              BEAUTY
            </NavLink>
          </span>
          <span>
            <NavLink to="/Studio" onClick={menuHandler}>
              STUDIO <sup className="tm">TM</sup>
            </NavLink>
          </span>
          <form onSubmit={(e) => e.preventDefault()} className="header-search">
            <span>
              {" "}
              <RiSearchLine />
            </span>
            <input
              type="text"
              placeholder="Search for product, brand and more..."
              value={searchValue}
              onChange={handleSearchChange}
            />
          </form>
        </nav>
      </div>
      <div className="d-flex align-items-center justify-content-between flex-row">
        <div className="user-cart">
          <span>
            <CgProfile fontSize={"1.3rem"} />
          </span>
          <span className="user-cart">Profile</span>
          <div className="profile">
            <h6>Welcome</h6>
            <div className="mb-3">To access account and manage orders</div>
            {!islogged && (
              <Link to="/Auth">
                <span className="login-signup mb-3">Login/Signup</span>
              </Link>
            )}
            {islogged && <span className="logout mb-3">Logout</span>}
            <hr />
            <span className=" mb-1">Orders</span>
            <br />
            <span className=" mb-1">Wishlist</span>
            <br />
            <span className=" mb-1">Gift Cards</span>
            <br />
            <span className=" mb-1">Contact Us</span>
            <br />
            <span className=" mb-1">Myntra Insider</span>
            <br />
            <hr />
            <span className=" mb-1">Myntra Credit</span>
            <br />
            <span className=" mb-1">Coupons</span>
            <br />
            <span className=" mb-1">Saved Cards</span>
            <br />
            <span className=" mb-1">Saved VPA</span>
            <br />
            <span className=" mb-1">Saved Address</span>
            <br />
            <hr />
          </div>
        </div>

        <div className="user-cart-wish pos-top-5">
          <span>
            <sup className="cart-number">{ctx.product.length}</sup>
          </span>
          <Link to="/checkOut" className="d-flex flex-row">
            <BsFillBagFill fontSize={"1.3rem"} color="black" />{" "}
          </Link>
          <span>Bag</span>
        </div>
        <div className="user-cart-wish burger">
          <span onClick={menuHandler}>
            <CgMenuRight fontSize={"2rem"} />
          </span>
        </div>
      </div>
    </header>
  );
};

export default Header;
