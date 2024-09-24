import PageBanner from '@/components/banner'
import React from 'react'

function BestSelling() {
  return (
    <div className='bg-secondary'>
        <PageBanner bannerImages='/banner/car.jpg' title='Best Selling'/>
        <div className="flex justify-start px-8 ">
      <img src="/images/shirtimage.jpg" alt="" className="w-[500px] h-[300px] border rounded-md" />
      </div>
    </div>
  )
}

export default BestSelling