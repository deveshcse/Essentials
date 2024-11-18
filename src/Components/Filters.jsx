import React from 'react'
import { RiArrowRightSLine } from "react-icons/ri";
const Filters = () => {
  return (
    <div className='hidden md:block  h-full col-span-1 text-gray-800 font-title text-base  '>
      <ul>
        <li className='flex items-center justify-between py-2'><span>Women's fashion</span> <span className=''><RiArrowRightSLine size={24}/></span>  
        </li>
        <li className='flex items-center justify-between py-2'><span>Men's fashion</span>   <span className=''><RiArrowRightSLine size={24}/></span>  
        </li>
        
        <li className='py-2'>Electronics</li>
        <li className='py-2'>Home & Lifestyle</li>
        <li className='py-2'>Medicine</li>
        <li className='py-2'>Sports & Outdoor</li>
        <li className='py-2'>Baby's & Toys</li>
        <li className='py-2'>Groceries & Pets</li>
        <li className='py-2'>Helth & Beauty</li>
      </ul>
    </div>
  )
}

export default Filters