import { InstagramLogoIcon } from '@radix-ui/react-icons'

import React from 'react'
import { FiFacebook } from 'react-icons/fi'
import { PiTiktokLogo } from 'react-icons/pi'

function Footer() {
  return (
    <div className='flex flex-col   bg-black w-full h-[300px] '>
      <div className='flex  justify-between   text-white mt-8 px-8'>
      <div className='flex flex-col w-[400px] gap-y-1'>
            <h1 className='text-3xl font-semibold border-b-2 border-b-blue-600 w-[190px] '>Adore Parfum</h1>
            <p className='font-semibold'>Elegance in every drop. Luxury scents, timeless allure.</p>
        <p className='font-semibold'>    Crafted for lasting impressions.</p>
        </div>
        <div className='flex flex-col w-[400px] gap-y-1'>
            <h1 className='text-3xl font-semibold border-b-2 border-b-blue-600 w-[255px]'>Customer Services</h1>
            <p className='font-semibold'>Phone: +971524525401</p>
            <p className='font-semibold'>Email: info@adoreparfume.com</p>
            <p className='font-semibold'>Address: Plot 5, Mussafah m-16, abu dhabi - united arab emirates</p>
        </div>
        <div className='flex flex-col'>
            <h1 className='text-3xl font-semibold border-b-2 border-b-blue-600 w-[190px]'>Adore Parfum</h1>
            <h1 className='font-semibold'>Follow us on</h1>
            <div className='flex gap-x-2'>
                <FiFacebook/>
                <InstagramLogoIcon/>
                <PiTiktokLogo/>
            </div>
        </div>
      
      </div>
      <div className='flex  justify-center  mt-16  '>
            <p className='border-b-2 border-b-blue-600 text-white font-semibold '>All right reserved © Adore Perfume. Dubai – London</p>
        </div>
       
    </div>
  )
}

export default Footer