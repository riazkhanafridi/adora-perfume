import Navbar from '@/components/navbar'
import React from 'react'
import Slider from './components/slider'
import CategoryListHome from './components/category-list'
import ScentsHomeCards from './components/ScentsCards'
import OurCollections from './components/our-collections'
import CustomizePage from '../customize'
import NewArrivals from './components/new-arrivals'

function Home() {
  return (
    <div className='bg-secondary px-8 py-2'>
       
        <Slider/>
        <CategoryListHome/>
        <ScentsHomeCards/>
        <OurCollections/>
        <CustomizePage/>
        <NewArrivals/>
    </div>
  )
}

export default Home