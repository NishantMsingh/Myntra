import React from 'react'
import giftCard1 from "../Assets/Images/GiftCart1.png";
import giftCard2 from "../Assets/Images/GiftCart2.png";
import giftCard3 from "../Assets/Images/GiftCart3.png";
import giftCard4 from "../Assets/Images/GiftCart4.png";

const GiftCards = () => {
  return (
   <div className='container-fluid mt-3'>
    <h3 className='bold ms-2'>GIFTING CARDS</h3>
 <div className=' mt-3 mb-3 container'>
      <div class="row justify-content-center align-items-center g-2">
        <div class="col-lg-4 col-md-6 col-sm-2"><img src={giftCard1} alt='Gift' className='img-fluid rounded'/></div>
        <div class="col-lg-4 col-md-6 col-sm-2"><img src={giftCard2} alt='Gift' className='img-fluid rounded'/></div>
        <div class="col-lg-4 col-md-6 col-sm-2"><img src={giftCard3} alt='Gift' className='img-fluid rounded'/></div>
        <div class="col-lg-4 col-md-6 col-sm-2"><img src={giftCard4} alt='Gift' className='img-fluid rounded'/></div>
      </div>
     
 
  </div>
   </div>
  )
}

export default GiftCards
