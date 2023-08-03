import React from 'react'
import Carousel from './Carousel'
import Trending from './Trending'
import DealOfTheDay from './DealOfTheDay'
import GiftCards from './GiftCards'
import NewInTopBrands from './NewInTopBrands'
import TrendsForHer from './TrendsForHer'
import TrendsForHim from './TrendsForHim'
import ColorsOfTheSeason from './ColorsOfTheSeason'
const Home = () => {
  return (
    <div className='pt-5'>
      <Trending/>
      <Carousel/>
      <DealOfTheDay/>
      <GiftCards/>
      <NewInTopBrands/>
      <TrendsForHer/>
      <TrendsForHim/>
      <ColorsOfTheSeason/>
    </div>
  )
}

export default Home
