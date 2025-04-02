import React from 'react'
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import Home from './pages/Home'
import Fashion from './pages/Fashion'
import Health from './pages/Health'
import Lifestyle from './pages/Lifestyle'
import Signin from './pages/Signin'
import Signup from './pages/Signup'
import Travel from './pages/Travel'
import Dashboard from './pages/Dashboard';
import Blogs from './pages/Blogs';

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/fashion' element={<Fashion />} />
      <Route path='/health' element={<Health />} />
      <Route path='/lifestyle' element={<Lifestyle />} />
      <Route path='/sign-in' element={<Signin />} />
      <Route path='/sign-up' element={<Signup />} />
      <Route path='/travel' element={<Travel />} />
      <Route path='/dashboard' element={<Dashboard />} />
      <Route path='/blogs' element={<Blogs />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App