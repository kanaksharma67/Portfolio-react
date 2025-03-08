import React from 'react'
import { PROJECTS } from '../Constants/react-portfolio-assets-kevin-main (1)/Constants/react-portfolio-assets-kevin-main/constants'
import myVideo from './video/Elitesports.mp4'
import agrimarket from './video/AgriMarket.mp4'
import { motion } from "motion/react"

function Projects() {
  return (
    <div className='border-b border-neutral-900 pb-4'>
        <motion.h1 
         whileInView={{opacity:1, y:0}}
         initial={{opacity:0, y:40}}
         transition={{duration:1.2}}
        className='text-center text-neutral-500 my-20 text-4xl' >Projects</motion.h1>
      
      <div className="flex"> 
        <div className="">
        <motion.h1 
        whileInView={{opacity:1, x:0}}
        initial={{opacity:0, x:-100}}
        transition={{duration:0.5}}
        className="text-gray-400 p-4">AgriMarket</motion.h1>
        <motion.p
        whileInView={{opacity:1, x:0}}
        initial={{opacity:0, x:-100}}
        transition={{duration:1.2}} 
        >AgriMarket is a web app developed by our team Debuggers to empower farmers with real-time access to news,<br/> weather forecasts, and crop market prices through image uploads. As part of the development team, I contributed <br/>to the frontend using React.js and Tailwind CSS, ensuring a seamless and responsive user experience. Our goal is to make agricultural insights <br/>more accessible and efficient for farmers. 🚜🌾</motion.p>
      

     </div>

      <motion.div
      whileHover={{scale:1.1}}
      whileInView={{opacity:1, x:0}}
      initial={{opacity:0, x:100}}
      transition={{duration:1}}
      className="rounded-2xl ">
      <video width="600" controls>
            <source src={agrimarket} type="video/mp4" />
            Your browser does not support the video tag.
        </video>
        {/* <a><button>Here's the link to our app </button></a> */}
      </motion.div>
      </div>

      <div className="flex">
        <div>
          <motion.h1 
        whileInView={{opacity:1, x:0}}
        initial={{opacity:0, x:-100}}
        transition={{duration:0.5}}
             className='text-gray-400 p-4'>EliteSports</motion.h1>
          <motion.p
        whileInView={{opacity:1, x:0}}
        initial={{opacity:0, x:-100}}
        transition={{duration:1.2}} 
          >Elite Sports is a web app designed to support athletes from low financial backgrounds by providing them with affordable <br/> training, an essential marketplace, progress tracking, and certification for offline academy admissions. Our mission is to make<br/> professional sports training accessible to everyone, regardless of financial constraints.</motion.p>

       

       
        </div>
        <motion.div
        whileHover={{scale:1.1}}
      whileInView={{opacity:1, x:0}}
      initial={{opacity:0, x:100}}
      transition={{duration:1}}
      className="rounded-2xl">
        <video width="600" controls>
            <source src={myVideo} type="video/mp4" />
            Your browser does not support the video tag.
        </video>
        {/* <a><button>Here's the link to our app </button></a> */}
        </motion.div>
      </div>
  
    </div>
  )
}

export default Projects
