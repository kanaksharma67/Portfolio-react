import React from 'react'
import { HERO_CONTENT } from '../Constants/react-portfolio-assets-kevin-main (1)/Constants/react-portfolio-assets-kevin-main/constants'
// import ProfilePic from  '../Images'
import { motion } from "motion/react"
import pic from './Profile.jpeg'

const container =(delay)=>({
  hidden: {x:-100,opacity:0},
  visible:{
    x: 0,
    opacity: 1,
    transition : {duration: 0.5, delay:delay}
  },

})
function Hero(){
  return (
    <div>
      <div className="border-b border-neutral-900 pb-4 lg:mb-3.5 flex flex-ro">
        <div className="w-full lg:w-1/2">
        <div className="flex flex-col items-center lg:items-start">
            <motion.h1 
            variants={container(0)}
            initial="hidden"
            animate="visible"
            >
            Kanak Sharma
            </motion.h1>
            <motion.span
             variants={container(0.5)}
             initial="hidden"
             animate="visible"
           className='bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent'>Web Developer</motion.span>
            <motion.p 
             variants={container(1)}
             initial="hidden"
             animate="visible"
            className='my-2 max-w-xl py-6 font-light tracking-tight'>{HERO_CONTENT}</motion.p>
            </div>
        </div>
        <div className='w-full lg:w-1/2 lg:p-8 '>
        <div className="flex justify-center flex-row"><motion.img initial={{x:+100,opacity:0}}
        animate={{x:0,opacity:1}}
        transition={{duration: 1,delay:1}}
         src={pic} alt="Kanak" className='rounded-2xl object-cover w-100 h-80'/>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
