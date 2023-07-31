import React from 'react'
import Carousel from './Carousel'
import DealOfTheDay from './DealOfTheDay'
import GiftCards from './GiftCards'
import NewInTopBrands from './NewInTopBrands'
const Home = () => {
  return (
    <div className='pt-5'>
      <Carousel/>
      <DealOfTheDay/>
      <GiftCards/>
      <NewInTopBrands/>
    </div>
  )
}

export default Home
