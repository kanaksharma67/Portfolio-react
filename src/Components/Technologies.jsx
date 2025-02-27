import React from 'react'
import { FaReact } from "react-icons/fa";
import { FaNode } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiMongodb } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { RiNextjsLine } from "react-icons/ri";
import { easeInOut, motion } from "motion/react"



function Technologies() {
  return (
    <div className='border-b border-neutral-800 pb-24 '>
      <h1 className="my-20 text-center text-4xl ">
        <div className="flex flex-wrap items-center justify-center gap-4">
            <motion.div 
            whileInView={{opacity:1, y:0}}
            // whileHover={{scale:1.1}}
            initial={{opacity:0, y:40}}
            transition={{duration: 0.5}}
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <FaReact className='text-7xl text-cyan-400'/>
            </motion.div> 
            <motion.div
             whileInView={{opacity:1, y:0}}
             whileHover={{scale:1.1}}
             initial={{opacity:0, y:40}}
             transition={{duration: 0.8}}
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <RiNextjsLine className='text-7xl text-white-200'/>
            </motion.div> 
            <motion.div
             whileInView={{opacity:1, y:0}}
             whileHover={{scale:1.1}}
             initial={{opacity:0, y:40}}
             transition={{duration: 1.0}} className="rounded-2xl border-4 border-neutral-800 p-4">
                <RiTailwindCssFill className='text-7xl text-blue-400'/>
            </motion.div> 
            <motion.div
             whileInView={{opacity:1, y:0}}
             whileHover={{scale:1.1}}
             initial={{opacity:0, y:40}}
             transition={{duration: 1.2}} className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiMongodb className='text-7xl text-green-500'/>
            </motion.div> 
            <motion.div
             whileInView={{opacity:1, y:0}}
             whileHover={{scale:1.1}}
             initial={{opacity:0, y:40}}
             transition={{duration: 1.5}} className="rounded-2xl border-4 border-neutral-800 p-4">
                <IoLogoJavascript className='text-7xl text-black bg-amber-400'/>
            </motion.div> 
        </div> 
      </h1> 
    </div> 
  )
}

export default Technologies
