import React from 'react'
import trendher1 from "../Assets/Images/trendher1.png";
import trendher2 from "../Assets/Images/trendher2.png";
import trendher3 from "../Assets/Images/trendher3.png";
import trendher4 from "../Assets/Images/trendher4.png";
import trendher5 from "../Assets/Images/trendher5.png";
import trendher6 from "../Assets/Images/trendher6.png";
import trendher7 from "../Assets/Images/trendher7.png";
import trendher8 from "../Assets/Images/trendher8.png";


const TrendsForHer = () => {
  return (
   <div className='container-fluid mt-3'>
  
 <div className=' mt-3 mb-3 container'>
 <h3 className='bold mb-3'>TRENDS FOR HER</h3>
   <div className='d-flex custom-scrollbar overflow-auto'>
      <img src={trendher1} alt='' className='img-fluid rounded'/>
      <img src={trendher2} alt='' className='img-fluid rounded'/>
      <img src={trendher3} alt='' className='img-fluid rounded'/>
      <img src={trendher4} alt='' className='img-fluid rounded'/>
      <img src={trendher5} alt='' className='img-fluid rounded'/>
      <img src={trendher6} alt='' className='img-fluid rounded'/>
      <img src={trendher7} alt='' className='img-fluid rounded'/>
      <img src={trendher8} alt='' className='img-fluid rounded'/>
     
     
   </div>
  </div>
   </div>
  )
}

export default TrendsForHer
