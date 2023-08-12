// Signup.js
import React from 'react';
import { useRef } from 'react'
import PropTypes from 'prop-types'; 
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
  const authmail=useRef();
  const authpass=useRef();
  const authname=useRef();
  const authnumber=useRef();
  const authconfirmpassword=useRef();
  const SignAuthHandler=(e)=>{
    e.preventDefault();
    let auth={
      email:authmail.current.value,
      password:authpass.current.value,
      name:authname.current.value,
      number:authnumber.current.value,
     confirmpassword:authconfirmpassword.current.value,
    }
    console.log(auth);
  }
  
  return (
    <div className="card" style={{ width: "24rem" }}>
      <img src={signup} className="card-img-top" alt="auth" />
      <div className="card-body">
        <div className='d-flex flex-row'>
          <Link onClick={handleLogin}><h4 className='me-2'>Log in</h4></Link> or <Link onClick={handleSignup}><h4 className='ms-2'>Signup</h4></Link>
        </div>

        <form onSubmit={SignAuthHandler}>
          <input type="text" name="name" id="text" placeholder="Your name" ref={authname} required/>
          <input type="number" name="phone" id="phone" placeholder="Mobile number" ref={authnumber} required/>
          <input type="email" name="email" id="email" placeholder="Your email"  ref={authmail} required/>
          <input type="password" name="password" id="password" placeholder="Password" ref={authpass} required/>
          <input type="password" name="confirmPassword" id="confirmPassword" placeholder="Confirm Password" ref={authconfirmpassword} required/> <br />

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
