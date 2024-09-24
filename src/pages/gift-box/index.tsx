import PageBanner from '@/components/banner'
import React from 'react'

function GiftBoxPage() {
  return (
    <div className='bg-secondary'>
        <PageBanner bannerImages='/banner/car.jpg' title='Gift Boxes'/>
        <div className="flex justify-start px-8 ">
      <img src="/images/shirtimage.jpg" alt="" className="w-[500px] h-[300px] border rounded-md" />
      </div>
    </div>
  )
}

export default GiftBoxPage