import React from 'react'
import product from "../Assets/Images/product.png"
const Men = () => {
  return (
    <div>
<div class='card-container'>
  <img src={product} alt='product1' class='img-fluid' />
  <div class='card-info'>
    
    <span class='price'>$19.99</span>
    <button class='wishlist-btn'>Add to Wishlist</button>
  </div>
</div>

    </div>
  )
}

export default Men
