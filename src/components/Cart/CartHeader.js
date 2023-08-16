import React from 'react'
import  "./CartHeader.css"
import {SiAdguard} from "react-icons/si";
import title from "../../Assets/Images/Logo.png"
const CartHeader = () => {
  return (
   <div className='container-fluid bor-bottom'>
     <header className='container d-flex align-items-center justify-content-between pt-4 pb-2 '>
      <div>
        <img src={title} alt='Myntra' className='img-control'/>
      </div>
      <div className='cartBold payment media-cart'>
        <span className='text-green'>BAG---------</span>
        <span >ADDRESS---------</span>
        <span >PAYMENT</span>
      </div>
      <div className='cartBold payment'><SiAdguard color='#14CDA8' fontSize={"1.6rem"}/> <sup>100 % SECURE</sup></div>
    </header>

   </div>
  )
}

export default CartHeader
