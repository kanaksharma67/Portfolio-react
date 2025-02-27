import React from 'react'
import { EXPERIENCES } from '../Constants/react-portfolio-assets-kevin-main (1)/Constants/react-portfolio-assets-kevin-main/constants'
import { motion } from "motion/react"

function Experience() {
  return (
    <div className='border border-neutral-900 pb-4'>
    <motion.h1  
    whileInView={{opacity:1, y: 0}}
    initial={{opacity: 0, y: 20}}
    transition={{duration: 1.2}}
    className='my-20 text-4xl text-center'>Experience</motion.h1> 
    <div>{EXPERIENCES.map((experience,index)=>(
        <div key={index} className='mb-8 flex flex-wrap lg:justify-center'>
            <motion.div 
            whileInView={{opacity:1,x:0}}
            initial={{opacity:0, x:-100}}
            transition={{duration: 1.2, delay: 0.5}}

            className='w-full lg:w-1/4'>
            <p className='mb-2 text-neutral-500 text-sm'>{experience.year}</p></motion.div>
            <motion.div 
            whileInView={{opacity:1,x:0}}
            initial={{opacity:0, x:100}}
            transition={{duration: 1.2, delay:0.5}}
            className="w-full max-w-xl lg:w-3/4">
            <h6 className='mb-2 font-serif '>{experience.role}-<span className='text-sm text-purple-100'>{experience.company} </span></h6>
            <p className='mb-4 text-neutral-100'>{experience.description} </p>
            {experience.technologies.map((tech, index)=>{
              <span key={index} className='mr-2 mt-4 rounded-2xl bg-neutral-900 px-2 py-1 text-sm text-purple-800'>{tech}</span>

            })}
            </motion.div>
        </div>
      
    ))} </div> 
    </div>
  )
}

export default Experience
