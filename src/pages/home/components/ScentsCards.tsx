import Button from '@/components/ui/button'
import React from 'react'

function ScentsHomeCards() {
  return (
    <div className='flex flex-col  items-center  border mt-24 '>
        <h1 className='text-primary font-semibold text-4xl'>Discover your signature scent</h1>
      <p className='mb-10 mt-10 text-gray-500'>  A scent that matches your personality.</p>
       <div className='flex gap-x-4'>
       <div className='flex flex-col items-center justify-center '>
       <img src="/images/floral.jpg" alt="" className='w-[800px] h-[500px] relative'/>
       <h1 className='absolute text-4xl font-semibold text-white'>Floral</h1>
       </div>
      <div className='flex flex-col justify-center items-center '>
      <img src="/images/woody.jpg" alt="" className='w-[800px] h-[500px] relative'/>
        <h1 className='absolute text-4xl font-semibold text-white'>Woody</h1>
       </div>
      </div>
     <div className='flex gap-x-4'>
  <div className='flex flex-col justify-center items-center'>
  <img src="/images/amber.jpg" alt=""  className='w-[800px] h-[500px] relative' />
  <h1 className='absolute text-4xl font-semibold text-white'>Amber</h1>
  </div>
    <div className='flex flex-col justify-center items-center'>
    <img src="/images/citrust.jpg" alt=""  className='w-[800px] h-[500px] relative'/>
    <h1 className='absolute text-4xl font-semibold text-white'>Citrus</h1>
    </div>
     </div>
     <Button className='mt-8 rounded-full px-12 text-sm font-light'>DISCOVER ALL SCENTS</Button>
    </div>
  )
}

export default ScentsHomeCards