import React from 'react'
import { PROJECTS } from '../Constants/react-portfolio-assets-kevin-main (1)/Constants/react-portfolio-assets-kevin-main/constants'

function Projects() {
  return (
    <div className='border-b border-neutral-900 pb-4'>
        <h2 className='text-center text-neutral-500 my-20 text-4xl' >Projects</h2>
      <div className="">{PROJECTS.map((project,index)=>{
        <div key={index} >
            <img src="" alt={project.title} />
        </div>
      })}
      </div>
      {/* <div className="">{PROJECTS.map(())} </div> */}
    </div>
  )
}

export default Projects
