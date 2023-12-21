import React, { useState } from 'react';
import Projects from './pages/Projects';
import Head from './components/Head/Head';
import Skills from './pages/Skills'
import Educations from './pages/Educations'
import Contact from './pages/Contact'
import Sidebar from "./components/Sidebar/Sidebar"
import Navbar from './components/Navbar/Navbar';
function MainContent() {
    
  const [show,setShow]=useState(false);

  const toggle=()=>{
    setShow((prev)=>!prev)
  }
  const sidebarStyles = {
    position: 'fixed',
    height: '100%',
    backgroundColor: '#fff',
    zIndex: 20,
    top: 0,
    left: 0,
    overflow: 'hidden',
    width: show ? '12rem' : '0', // Adjust width values as needed
    transition: 'width 1s ease', // Adjust transition duration as needed
  };
  const handle=()=>{
    if(show){
      setShow(false)
    }
  }

  return (
    <div className='flex flex-col '>
      {show && 
     <div className="" style={sidebarStyles}>
         <Sidebar />
      </div>
      }
      <div className="flex-1 z-10 overflow-hidden overflow-x-auto">
      <div className=' z-20 xxs:fixed sm:fixed md:fixed lg:hidden w-full 'onClick={toggle}  ><Navbar /></div>
      <div className='pb-28 sm:mt-20 xxs:mt-20 xs:mt-20 md:mt-20 lg:mt-0' onClick={handle} id='projects'><Head title="PROJECTS"/></div>
      <div className='pb-16' onClick={handle}><Projects /></div>
      <div className=' pb-28' onClick={handle} id='skills'><Head title="SKILLS"/></div>
      <div onClick={handle}><Skills/></div>
      <div className=' pb-28' onClick={handle} id='education'><Head title="EDUCATION"/></div>
      <div className='pb-16' onClick={handle}><Educations/></div>
      <div className=' pb-28'onClick={handle} id='contact'><Head title="CONTACT"/></div>
      <div className=' xss:pb-96 xs:pb-96 sm:pb-96 md:pb-80  lg:pb-80' onClick={handle}><Contact /></div>
      
    </div>
    </div>
    
  );
}

export default MainContent;
