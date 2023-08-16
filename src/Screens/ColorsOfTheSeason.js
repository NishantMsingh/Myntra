
import React from 'react'
import color1 from "../Assets/Images/colors1.png";
import color2 from "../Assets/Images/colors2.png";
import color3 from "../Assets/Images/colors3.png";
import color4 from "../Assets/Images/colors4.png"
import color5 from "../Assets/Images/colors5.png"
import color6 from "../Assets/Images/colors6.png"
import color7 from "../Assets/Images/colors7.png"
import color8 from "../Assets/Images/colors8.png"
const ColorsOfTheSeason = () => {
  return (

  
 <div className='mt-3 mb-3 container-fluid'>
 <h3 className='bold mb-3'>GIFTING CARDS</h3>
      <div className="row justify-content-center align-items-center g-2">
        <div className="col-lg-3 col-md-4 col-sm-12"><img src={color1} alt='Gift' className='img-fluid rounded'/></div>
        <div className="col-lg-3 col-md-4 col-sm-12"><img src={color2} alt='Gift' className='img-fluid rounded'/></div>
        <div className="col-lg-3 col-md-4 col-sm-12"><img src={color3} alt='Gift' className='img-fluid rounded'/></div>
        <div className="col-lg-3 col-md-4 col-sm-12"><img src={color4} alt='Gift' className='img-fluid rounded'/></div>
        <div className="col-lg-3 col-md-4 col-sm-12"><img src={color5} alt='Gift' className='img-fluid rounded'/></div>
        <div className="col-lg-3 col-md-4 col-sm-12"><img src={color6} alt='Gift' className='img-fluid rounded'/></div>
        <div className="col-lg-3 col-md-4 col-sm-12"><img src={color7} alt='Gift' className='img-fluid rounded'/></div>
        <div className="col-lg-3 col-md-4 col-sm-12"><img src={color8} alt='Gift' className='img-fluid rounded'/></div>
      </div>
     
 
  </div>
   
  )
}

export default ColorsOfTheSeason