import React from 'react'
import Trend1 from "../Assets/Images/Trending1.png";
import Trend2 from "../Assets/Images/Trending2.png";
import Trend3 from "../Assets/Images/Trending3.png";
import Trend4 from "../Assets/Images/Trending4.png"

const Trending = () => {
  return (
   <div className='container-fluid mt-3'>
  
 <div className='mt-3 mb-3 container'>
 <h3 className='bold mb-3'>TRENDING IN ACCESSORIES</h3>
 <div className='d-flex custom-scrollbar overflow-auto'>
    
      <img src={Trend1} alt='' className='img-fluid rounded'/>
      <img src={Trend2} alt='' className='img-fluid rounded'/>
      <img src={Trend3} alt='' className='img-fluid rounded'/>
      <img src={Trend4} alt='' className='img-fluid rounded'/>
      <img src={Trend1} alt='' className='img-fluid rounded'/>
      <img src={Trend3} alt='' className='img-fluid rounded'/>
      
     
   </div>
     
 
  </div>
   </div>
  )
}

export default Trending
