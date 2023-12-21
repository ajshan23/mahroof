import React from 'react'
import {FaUser,FaGraduationCap } from "react-icons/fa"
import {GoProjectSymlink} from "react-icons/go"
import {FaBolt } from "react-icons/fa"
import {MdMail } from "react-icons/md"
import {SiGoogledocs } from "react-icons/si"
import { RiFileList2Fill } from "react-icons/ri";
import { HashLink as Linkh } from 'react-router-hash-link'
const Sidebar = () => {
    
  return (
    <div className='w-48 h-screen bg-white absolute'>
      <div className='hidden  lg:flex w-full  justify-center align-middle border-b'>
        <div className='h-max font-thin text-3xl font-sans py-10 text-start '>
            <h1 className='text-[#008073]'>Muhammed</h1>
            <h1 className='gap-3 text-[#008073]'>Mahroof</h1>
            <p className='text-sm font-thin '>Full Stack developer</p>
        </div>
        
      </div>

      <div className='w-full font-thin'>

      <Linkh to="#about" aria-activedescendant='#about'><div className='transition ease-in-out delay-150 flex items-center justify-start pl-10 py-4 gap-4 hover:bg-slate-50 hover:border-l-2 border-green-700 duration-100'><FaUser size={25} color='#008073' className='flex-shrink-0'/>About</div></Linkh>
      <Linkh to="#projects" smooth aria-activedescendant='#about'><div className='transition ease-in-out delay-150 flex items-center justify-start pl-10 py-4 gap-4 hover:bg-slate-50 hover:border-l-2 border-blue-700 duration-100'><RiFileList2Fill size={25} color='#008073' className='flex-shrink-0'/>Projects</div></Linkh>
      <Linkh to="#skills" smooth><div className='transition ease-in-out delay-150 flex items-center justify-start pl-10 py-4 gap-4 hover:bg-slate-50 hover:border-l-2 border-yellow-300 duration-100'><FaBolt size={25} color='#008073' className='flex-shrink-0'/>Skills</div></Linkh>
      <Linkh to="#education" smooth><div className='transition ease-in-out delay-150 flex items-center justify-start pl-10 py-4 gap-4 hover:bg-slate-50 hover:border-l-2 border-black duration-100'><FaGraduationCap  size={25} color='#008073' className='flex-shrink-0'/>Education</div></Linkh>
      <Linkh to="#contact" smooth><div className='transition ease-in-out delay-150 flex items-center justify-start pl-10 py-4 gap-4 hover:bg-slate-50 hover:border-l-2 border-rose-900 duration-100'><MdMail size={25} color='#008073' className='flex-shrink-0'/>Contact</div></Linkh>
      <Linkh to="#resume" smooth><div className='transition ease-in-out delay-150 flex items-center justify-start pl-10 py-4 gap-4 hover:bg-slate-50 hover:border-l-2 border-gray-600 duration-100'><SiGoogledocs  size={25} color='#008073' className='flex-shrink-0'/>Resume</div></Linkh>
      </div>
      
    </div>
  )
}

export default Sidebar
