import React, { useRef } from 'react'
import "./auth.css";
import PropTypes from 'prop-types'; 
import signup from "../../Assets/Images/auth.png";
import { Link } from 'react-router-dom';
const Login = (props) => {
    const handleLogin = () => {
        props.signupHandler(false);
      };
    
      const handleSignup = () => {
        props.signupHandler(true);
      };
const authmail=useRef();
const authpass=useRef();
const LogAuthHandler=(e)=>{
  e.preventDefault();
  let auth={
    email:authmail.current.value,
    password:authpass.current.value
  }
  console.log(auth);
}

  return (
    <div className="card" style={{width: "24rem"}}>
    <img src={signup} className="card-img-top" alt="auth"/>
    <div className="card-body">
      <div className='d-flex flex-row'>
          <Link onClick={handleLogin}><h4 className='me-2'>Log in</h4></Link> or <Link onClick={handleSignup}><h4 className='ms-2'>Signup</h4></Link>
        </div>
      
       <form onSubmit={LogAuthHandler}> 
        <input type="email" name="email" id="email" placeholder="Your email" ref={authmail}/>
        <input
  type="password"
  name="password"
  id="password"
  placeholder="Password"
  ref={authpass}
  autoComplete="password"
  required
/>

       

        <sup htmlFor="genral">By continuing. I agree to Terms of use Use and Privacy Policy</sup>
        <input type="submit" value="Login"/>
       </form>
    </div>
  </div>
  )
 
}
Login.propTypes = {
    signupHandler: PropTypes.func.isRequired,
  };
export default Login
