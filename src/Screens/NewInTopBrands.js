import React from 'react'
import top1 from "../Assets/Images/topbrand1.png";
import top2 from "../Assets/Images/topbrand2.png";
import top3 from "../Assets/Images/topbrand3.png";
import top4 from "../Assets/Images/topbrand4.png";
import top5 from "../Assets/Images/topbrand5.png";
import top6 from "../Assets/Images/topbrand6.png";
import top7 from "../Assets/Images/topbrand7.png";
import top8 from "../Assets/Images/topbrand8.png";
const NewInTopBrands = () => {
  return (
    <div className='container-fluid mt-3'>
    <h3 className='bold ms-2'>NEW IN TOP BRANDS</h3>
    <div className=' mt-3 mb-3 container'>
   <div className='d-flex custom-scrollbar overflow-auto'>
      <img src={top1} alt='' className='img-fluid rounded'/>
      <img src={top2} alt='' className='img-fluid rounded'/>
      <img src={top3} alt='' className='img-fluid rounded'/>
      <img src={top4} alt='' className='img-fluid rounded'/>
      <img src={top5} alt='' className='img-fluid rounded'/>
      <img src={top6} alt='' className='img-fluid rounded'/>
      <img src={top8} alt='' className='img-fluid rounded'/>
   </div>
  </div>
   </div>
  )
}

export default NewInTopBrands
