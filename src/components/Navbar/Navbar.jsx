import React from 'react'
import { VscThreeBars } from "react-icons/vsc";

const Navbar = () => {
  return (
    <div className='lg:hidden h-20 w-[100%] bg-white text-[#009688] flex items-center'>
      <div className='pl-5' ><VscThreeBars size={44} color='#009688'/></div>
      <div className='flex w-full'>
      <div className=' flex flex-col w-full items-center h-max  text-xl font-sans py-10  '>
            <h1 className='font-semibold'>Muhammed Mahroof</h1>
            <p className='text-sm font-thin text-black '>Full Stack developer</p>
        </div>
      </div>
    </div>
  )
}

export default Navbar
