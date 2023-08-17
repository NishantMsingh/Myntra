import React, { useState } from 'react'
import Signup from './Signup'
import Login from "./Login"
const Auth = () => {
    const [logsigntoggle,setLogSignToggle]=useState(true);
  return (
    <div className='authbg'>
        {!logsigntoggle&&<Signup signupHandler={setLogSignToggle}/>}
        {logsigntoggle&&<Login signupHandler={setLogSignToggle}/>}
    </div>
  )
}

export default Auth
