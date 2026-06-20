import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import Signup from './pages/Signup'
import MainRoutes from './routes/MainRoutes'
import ScrollToTop from './components/ScrollToTop'
import NotFound from './pages/NotFound'
import {Toaster} from 'react-hot-toast'
const App = () => {
  return (
    <div>
   <Toaster/>
      <ScrollToTop />
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/404' element={<NotFound />} />
        <Route path='/*' element={<MainRoutes />} />
      </Routes>
    </div>
  )
}

export default App