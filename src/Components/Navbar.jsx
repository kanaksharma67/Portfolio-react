import React from 'react'
import { FaLinkedin , FaGithub, FaSquare,  FaInstagramSquare, FaTwitterSquare } from "react-icons/fa";


function Navbar() {
  return (
    <>
    <div>
       <nav className="mb-20 flex items-center justify-between py-6">
        <div className="flex flex-shrink-0 items-center">
            <h1 className=''>KS</h1>
        </div>
         <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
         <a href="https://www.linkedin.com/in/kanak-sharma-573b9529b/" className='no-underline text-gray-300'> <FaLinkedin className='text-gray-300'/></a>
         <a href="https://github.com/kanaksharma67"> <FaGithub className='text-gray-300'/></a>
         <a href="https://x.com/kanak_shar57978"> <FaTwitterSquare className='text-gray-300'/></a>
         <FaInstagramSquare/>
        </div> 
      </nav> 
    </div>
    </>
  )
}

export default Navbar
