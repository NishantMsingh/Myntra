import React from 'react'
import dealoftheday1 from "../Assets/Images/dealoftheday1.png";
import dealoftheday2 from "../Assets/Images/dealoftheday2.png";
import dealoftheday3 from "../Assets/Images/dealoftheday3.png";
import dealoftheday4 from "../Assets/Images/dealoftheday4.png";
import dealoftheday5 from "../Assets/Images/dealoftheday5.png";
import dealoftheday6 from "../Assets/Images/dealoftheday6.png";
 
import dealoftheday8 from "../Assets/Images/dealoftheday8.png";
const DealOfTheDay = () => {
  return (
   <div className='container-fluid mt-3'>
    
 <div className=' mt-3 mb-3 container'>
 <h3 className='bold mb-3'>DEAL OF THE DAY</h3>
   <div className='d-flex custom-scrollbar overflow-auto'>
      <img src={dealoftheday1} alt='' className='img-fluid rounded'/>
      <img src={dealoftheday2} alt='' className='img-fluid rounded'/>
      <img src={dealoftheday3} alt='' className='img-fluid rounded'/>
      <img src={dealoftheday4} alt='' className='img-fluid rounded'/>
      <img src={dealoftheday5} alt='' className='img-fluid rounded'/>
      <img src={dealoftheday6} alt='' className='img-fluid rounded'/>
      <img src={dealoftheday8} alt='' className='img-fluid rounded'/>
      <img src={dealoftheday1} alt='' className='img-fluid rounded'/>
      <img src={dealoftheday2} alt='' className='img-fluid rounded'/>
      <img src={dealoftheday3} alt='' className='img-fluid rounded'/>
     
   </div>
  </div>
   </div>
  )
}

export default DealOfTheDay
