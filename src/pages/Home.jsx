import React from 'react'
import Hero from '../components/Hero'
import LatestCollection from '../components/LatestCollection'
import Features from '../components/Features'
import BestSeller from '../components/BestSeller'
import NewsletterBox from '../components/NewsletterBox'


const Home = () => {
  return (
    <div >
      <Hero/>  
      <LatestCollection/>
      <Features/>
      <BestSeller/>
      <NewsletterBox/>
    </div>
  )
}

export default Home