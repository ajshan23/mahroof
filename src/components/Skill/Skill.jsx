import React from 'react'

const Skill = (props) => {
  return (
    <>
    <div className="sticky w-[90%]  border box-content  bg-white  " style={{boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)'}}>
      <div className="w-full h-20 flex flex-col justify-between  text-4xl font-light text-[#795548]">
        <h1 className="pl-8 pt-8 capitalize pb-5">{props.title}</h1>
        <div className='px-6'><hr className='border-t-2 border-gray-200 '/></div>
      </div>
      <div className='lg:hidden w-full h-fit pt-10 pb-10 grid  grid-cols-2  md:grid-cols-3 lg:grid-cols-6 '>
       {props.img1 &&  <div className='flex flex-col items-center gap-1 '><img src={props.img1} alt=""className=' h-custom2 w-custom-4' /><h1>{props.h1}</h1></div>}
       {props.img2 &&  <div className='flex flex-col items-center gap-1'><img src={props.img2} alt="" className=' h-custom2 w-custom-4 '/><h1>{props.h2}</h1></div>}
       {props.img3 &&  <div className='flex flex-col items-center gap-1'><img src={props.img3} alt="" className=' h-custom2 w-custom-4 '/><h1>{props.h3}</h1></div>}
       {props.img4 &&  <div className='flex flex-col items-center gap-1'><img src={props.img4} alt="" className=' h-custom2 w-custom-4 '/><h1>{props.h4}</h1></div>}
       {props.img5 &&  <div className='flex flex-col items-center gap-1'><img src={props.img5} alt="" className=' h-custom2 w-custom-4 '/><h1>{props.h5}</h1></div>}
       {props.img6 &&  <div className='flex flex-col items-center gap-1'><img src={props.img6} alt="" className=' h-custom2 w-custom-4 '/><h1>{props.h6}</h1></div>}
      </div>
      <div className='xs:hidden md:hidden lg:flex w-full h-fit pt-10 pb-10  px-16  '>
       <div className='flex justify-between space-x-28 '>
       {props.img1 &&  <div className='flex flex-col items-center gap-1 '><img src={props.img1} alt=""className=' h-custom2 w-custom-4' /><h1>{props.h1}</h1></div>}
       {props.img2 &&  <div className='flex flex-col items-center gap-1'><img src={props.img2} alt="" className=' h-custom2 w-custom-4 '/><h1>{props.h2}</h1></div>}
       {props.img3 &&  <div className='flex flex-col items-center gap-1'><img src={props.img3} alt="" className=' h-custom2 w-custom-4 '/><h1>{props.h3}</h1></div>}
       {props.img4 &&  <div className='flex flex-col items-center gap-1'><img src={props.img4} alt="" className=' h-custom2 w-custom-4 '/><h1>{props.h4}</h1></div>}
       {props.img5 &&  <div className='flex flex-col items-center gap-1'><img src={props.img5} alt="" className=' h-custom2 w-custom-4 '/><h1>{props.h5}</h1></div>}
       {props.img6 &&  <div className='flex flex-col items-center gap-1'><img src={props.img6} alt="" className=' h-custom2 w-custom-4 '/><h1>{props.h6}</h1></div>}
       </div>
      </div>
    </div>
    
    </>
  )
}

export default Skill
