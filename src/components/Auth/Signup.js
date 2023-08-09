// Signup.js
import React from 'react';
import PropTypes from 'prop-types'; // Import prop-types library
import "./auth.css";
import signup from "../../Assets/Images/auth.png";
import { Link } from 'react-router-dom';

const Signup = (props) => {
   
  const handleLogin = () => {
    props.signupHandler(false);
  };

  const handleSignup = () => {
    props.signupHandler(true);
  };

  return (
    <div className="card" style={{ width: "24rem" }}>
      <img src={signup} className="card-img-top" alt="auth" />
      <div className="card-body">
        <div className='d-flex flex-row'>
          <Link onClick={handleLogin}><h4 className='me-2'>Log in</h4></Link> or <Link onClick={handleSignup}><h4 className='ms-2'>Signup</h4></Link>
        </div>

        <form action="">
          <input type="text" name="name" id="text" placeholder="Your name" />
          <input type="number" name="phone" id="phone" placeholder="Mobile number" />
          <input type="email" name="email" id="email" placeholder="Your email" />
          <input type="password" name="password" id="password" placeholder="Password" />
          <input type="password" name="confirmPassword" id="confirmPassword" placeholder="Confirm Password" /> <br />

          <label htmlFor="general">By continuing, I agree to Terms of Use and Privacy Policy</label>
          <input type="submit" value="Signup" />
        </form>
      </div>
    </div>
  );
};

Signup.propTypes = {
  signupHandler: PropTypes.func.isRequired,
};

export default Signup;
