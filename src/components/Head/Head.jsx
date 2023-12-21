import React from 'react'

const Head = (props) => {
  return (
    <div className=' absolute flex bg-[#008073] text-white h-28 w-full font-custom text-custom items-center'>
      
      <h1 className='ml-12'>{props.title}</h1>
    </div>
  )
}

export default Head
