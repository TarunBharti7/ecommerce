import React from 'react'
import Home from './pages/Home'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductInfo from './pages/ProductInfo';
import Cart from './pages/Cart';

const App = () => {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/product/:id' element={<ProductInfo/>} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App