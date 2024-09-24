import Button from '@/components/ui/button'
import React from 'react'

function OurCollections() {
  return (
    <div className='flex flex-col items-center  mt-20 bg-black'>
        <p className='text-3xl text-primary font-semibold mt-8 '>Naturally Luxurious Fragrances</p>
        <div className='flex justify-center mt-20 gap-x-4'>
            <div className=' flex flex-col items-center justify-center  border mb-10 '>
                <img src="/images/men.jpg" alt="" className='w-[500px] h-[400px] relative ' />
                <h1 className='absolute text-3xl font-semibold text-primary  '>Women's Collection</h1>
                <p className='absolute  font-semibold text-white mt-24 '>A Sensitive Touch JUST FOR HER</p>
                <Button className='px-8 rounded-full mb-8 bg-primary'>Browse the collection</Button>
            </div>
            <div className=' flex flex-col items-center justify-center  border mb-10  '>
                <img src="/images/women.jpg" alt="" className='w-[500px] h-[400px] relative ' />
                <h1 className='absolute text-3xl font-semibold text-primary '>Citrus Fragrances</h1>
                <p className='absolute  font-semibold text-white mt-24 '>Wear It With Style JUST FOR HIM</p>
                <Button className='px-8 rounded-full mb-8 bg-primary'>Browse the collection</Button>
            </div>

        </div>

    </div>
  )
}

export default OurCollections