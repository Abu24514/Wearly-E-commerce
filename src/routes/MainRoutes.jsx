import React from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import Home from '../pages/Home'
import Collection from '../pages/Collection'
import About from '../pages/About'
import Contact from '../pages/Contact'
import Product from '../pages/Product'
import Cart from '../pages/Cart'
import PlaceOrder from '../pages/PlaceOrder'
import Orders from '../pages/Orders'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import SearchBar from '../components/SearchBar'
import Verify from '../pages/Verify'

const MainRoutes = () => {
  return (
    <>
      <div className='px-4 sm:px-[5vw] md:px-[6vw] lg:px-[7vw]'>
        <Navbar />
        <SearchBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/collection' element={<Collection />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/product/:productId' element={<Product />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/place-order' element={<PlaceOrder />} />
          <Route path='/orders' element={<Orders />} />
          <Route path='/verify' element={<Verify />} />
          <Route path='*' element={<Navigate to='/404' replace />} />
        </Routes>
      </div>
      <Footer />
    </>
  )
}

export default MainRoutes