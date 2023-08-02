import React from 'react'
import trendhim1 from "../Assets/Images/trendhim1.png";
import trendhim2 from "../Assets/Images/trendhim2.png";
import trendhim3 from "../Assets/Images/trendhim3.png";
import trendhim4 from "../Assets/Images/trendhim4.png";
import trendhim5 from "../Assets/Images/trendhim5.png";
import trendhim6 from "../Assets/Images/trendhim6.png";
import trendhim7 from "../Assets/Images/trendhim7.png";
import trendhim8 from "../Assets/Images/trendhim8.png";


const TrendsForHim = () => {
  return (
   <div className='container-fluid mt-3'>
  
 <div className=' mt-3 mb-3 container'>
 <h3 className='bold mb-3'>TRENDS FOR HIM</h3>
   <div className='d-flex custom-scrollbar overflow-auto'>
      <img src={trendhim1} alt='' className='img-fluid rounded'/>
      <img src={trendhim2} alt='' className='img-fluid rounded'/>
      <img src={trendhim3} alt='' className='img-fluid rounded'/>
      <img src={trendhim4} alt='' className='img-fluid rounded'/>
      <img src={trendhim5} alt='' className='img-fluid rounded'/>
      <img src={trendhim6} alt='' className='img-fluid rounded'/>
      <img src={trendhim7} alt='' className='img-fluid rounded'/>
      <img src={trendhim8} alt='' className='img-fluid rounded'/>
     
     
   </div>
  </div>
   </div>
  )
}

export default TrendsForHim
