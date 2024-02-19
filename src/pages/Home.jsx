import React from 'react'
import Nav from '../component/Nav'
import Slider from '../component/Slider'
import CardPage from './CardPage'
import FooterPage from './FooterPage'

const Home = () => {
  return (
    <>
        <Nav/>
        <Slider/>
        <CardPage/>
        <FooterPage/>
    </>
  )
}

export default Home