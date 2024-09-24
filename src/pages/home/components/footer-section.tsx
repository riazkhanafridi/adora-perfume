import React from 'react'
import { ArrowLeftRight,  Lock, MapPin } from "lucide-react";
import { InstagramLogoIcon } from '@radix-ui/react-icons';

function FooterSection() {
  return (
    <div className='flex py-16 justify-between px-8 bg-secondary'>
       <div className='flex flex-col'>
      <div className='flex gap-x-1 '>
      <MapPin className='shadow-md rounded-full'/>
      <p>Free Fast Shipping</p>
      </div>
       <p>On all orders above AED500</p>
       </div>
       <div  className='flex flex-col'>
    <div className='flex gap-x-1'>
    <ArrowLeftRight  className='shadow-md rounded-full '/>
    <p>Fine Fragrances Compounded by hand, on-demand</p>
    </div>
        <p>Top Quality</p>
       </div>
       <div  className='flex flex-col'>
        <div className='flex gap-x-1 items-center'>
        <InstagramLogoIcon  className='shadow-md rounded-full' />
        <p>Visit us on Instagram</p>
        </div>
        <p>@adore-parfum</p>
       </div>
       <div  className='flex flex-col '>
      <div className='flex gap-x-1 '>  <Lock  className='shadow-md rounded-full'/>
      <p>100% Secure Checkout</p></div>
        <p>Credit Cards - Apple Pay - Google Pay</p>
       </div>
    </div>
  )
}

export default FooterSection