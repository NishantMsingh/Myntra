import React from 'react'
import dealoftheday1 from "../Assets/Images/dealoftheday1.png";
import dealoftheday2 from "../Assets/Images/dealoftheday2.png";
import dealoftheday3 from "../Assets/Images/dealoftheday3.png";
import dealoftheday4 from "../Assets/Images/dealoftheday4.png";
import dealoftheday5 from "../Assets/Images/dealoftheday5.png";
import dealoftheday6 from "../Assets/Images/dealoftheday6.png";
// import dealoftheday7 from "../Assets/Images/dealoftheday7.png";
import dealoftheday8 from "../Assets/Images/dealoftheday8.png";
const DealOfTheDay = () => {
  return (
    <div className='text-start mt-3 mb-3'>
     <h1 className='bold ms-2'>DEAL OF THE DAY</h1>
     <div className='d-flex custom-scrollbar overflow-auto'>
        <img src={dealoftheday1} alt='' className='img-fluid'/>
        <img src={dealoftheday2} alt='' className='img-fluid'/>
        <img src={dealoftheday3} alt='' className='img-fluid'/>
        <img src={dealoftheday4} alt='' className='img-fluid'/>
        <img src={dealoftheday5} alt='' className='img-fluid'/>
        <img src={dealoftheday6} alt='' className='img-fluid'/>
        {/* <img src={dealoftheday7} alt='' className='img-fluid'/> */}
        <img src={dealoftheday8} alt='' className='img-fluid'/>
        <img src={dealoftheday1} alt='' className='img-fluid'/>
        <img src={dealoftheday2} alt='' className='img-fluid'/>
        <img src={dealoftheday3} alt='' className='img-fluid'/>
       
     </div>
    </div>
  )
}

export default DealOfTheDay
