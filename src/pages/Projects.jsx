import React from 'react'
import Project from '../components/Project/Project'
import img1 from "../images/img1.png"
const Projects = () => {
  const project1={
    title:"Save By text",
    description:"luefhiwuvh iuefnwuifnwoifn eifnweofnweoifn nfofnwufnow nciwnv niu nwun",
    li1:<><b>Baluma CSS </b> <p> &nbsp;frontend</p></>,
    li2:<><b>Baluma CSS </b> <p> &nbsp;frontend</p></>,
    li3:<><b>Baluma CSS</b> <p> &nbsp;frontend</p></>,
    li4:<><b>Baluma CSS</b> <p>&nbsp;frontend</p></>,
    Clink:"",
    GitLink:"",
  }
  return (
    <div className='flex flex-col justify-center items-center pt-16'>
      <div className=' grid grid-flow-row gap-x-7 gap-y-16 xs:grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
      <Project  details={project1} logo={img1} />
      <Project  details={project1} logo={img1}/>
      <Project  details={project1} logo={img1}/>
      <Project  details={project1} logo={img1}/>
      <Project  details={project1} logo={img1}/>
      <Project  details={project1} logo={img1}/>
       </div>
    </div>
  )
}

export default Projects
