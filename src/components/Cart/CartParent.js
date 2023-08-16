import React, { useState } from 'react'
import CartHeader from './CartHeader'
import CartFooter from './CartFooter'
import CartCheckOut from './CartCheckOut'
import "./Cartmain.css"
import Payment from './Payment'
const CartParent = () => {
  const [address,setAddress]=useState(false);
  const HandleAddress=()=>{
    setAddress(true);
  }
  return (
    <div className='container-fluid'>
      <CartHeader/>
     {!address&& <CartCheckOut addressHandler={HandleAddress}/>}
     {address &&  <Payment/>}
     

      <CartFooter/>
    </div>
  )
}

export default CartParent
