import React from 'react'
import { Link } from 'react-router-dom'

function CategoryListHome() {
  return (
   <div className='flex justify-center gap-x-8 mt-10 '>
     <div className='flex flex-col  justify-center items-center '>
  
  <img src="/banner/car.jpg" alt="" className='w-[250px] h-[150px] rounded-md relative'/>
  
   <h1 className='absolute text-xl font-semibold text-white' >BAKHOUR</h1>
   <Link to="/category" className='absolute bottom-8  font-semibold text-white border-b-2'>shop-now</Link>


  
</div>
<div className='flex flex-col  justify-center items-center'>
  
  <img src="/banner/interior.jpg" alt="" className='w-[250px] h-[150px] rounded-md relative'/>
  
   <h1 className='absolute text-xl font-semibold text-white' >FRAGRANCES</h1>
   <Link to="/category" className='absolute bottom-8  font-semibold text-white border-b-2'>shop-now</Link>


  
</div>
    <div className='flex flex-col  justify-center items-center'>
  
  <img src="/banner/men.jpg" alt="" className='w-[250px] h-[150px] rounded-md relative'/>
  
   <h1 className='absolute text-xl font-semibold text-white' >INTERIOR</h1>
   <Link to="/category" className='absolute bottom-8  font-semibold text-white border-b-2'>shop-now</Link>


  
</div>
   </div>
  )
}

export default CategoryListHome