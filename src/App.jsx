import React from 'react'
import Home from './pages/Home'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductInfo from './pages/ProductInfo';

const App = () => {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/product/:id' element={<ProductInfo/>} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App