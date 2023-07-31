import React from 'react'
import Carousel from './Carousel'
import DealOfTheDay from './DealOfTheDay'
import GiftCards from './GiftCards'
import NewInTopBrands from './NewInTopBrands'
import TrendsForHer from './TrendsForHer'
import TrendsForHim from './TrendsForHim'
const Home = () => {
  return (
    <div className='pt-5'>
      <Carousel/>
      <DealOfTheDay/>
      <GiftCards/>
      <NewInTopBrands/>
      <TrendsForHer/>
      <TrendsForHim/>
    </div>
  )
}

export default Home
