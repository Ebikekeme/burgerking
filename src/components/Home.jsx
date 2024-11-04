import React from 'react'
import { NavBar } from './NavBar'
import Slider from './Slider'
import StoreLocator from './StoreLocator'
import { Download } from './download'
import { News } from './news'
import { NewsCard } from './NewsCard'

export const Home = () =>{

  return (
    <>
       <NavBar />
      <Slider />
      <StoreLocator/>
      <Download/>
      <News/>
      <NewsCard/>
      
    </>
  )
}


