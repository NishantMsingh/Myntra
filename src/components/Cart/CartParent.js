import React, { useContext, useEffect, useState } from 'react'
import CartHeader from './CartHeader'
import CartFooter from './CartFooter'
import CartCheckOut from './CartCheckOut'
import "./Cartmain.css"
import EmptyCart from "./EmptyCart"
import CartContext from '../../context/Cart-context'
import Payment from './Payment'
const CartParent = () => {

  const [empty,setEmpty]=useState(true);
  const ctx=useContext(CartContext);
  useEffect(()=>{
    if( ctx.product.length>0)
    {
      setEmpty(false);
    }
    else
    {
      setEmpty(true);
    }
  },[ctx.product.length])
  const [address,setAddress]=useState(false);
 
  const HandleAddress=()=>{
    setAddress(true);
  }
  return (
    <div className='container-fluid'>
      <CartHeader address={address}/>
      {!empty&&<div>
      {!address&& <CartCheckOut addressHandler={HandleAddress}/>}
      {address &&  <Payment/>}
      </div>}
      {empty&&<EmptyCart/>}
     

      <CartFooter/>
    </div>
  )
}

export default CartParent
