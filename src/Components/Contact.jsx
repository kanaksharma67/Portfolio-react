import React from 'react'
import { CONTACT } from '../Constants/react-portfolio-assets-kevin-main (1)/Constants/react-portfolio-assets-kevin-main/constants'

function Contact() {
  return (
    <div className='border-b border-neutral-900 '>
        <h1 className='my-10 text-center text-4xl' >Contact Me  </h1>
        <div className="text-center tracking-tighter">
            <p className='my-4'>{CONTACT.address}</p>
            <p className='my-4'>{CONTACT.phoneNo}</p>
            <a href="/" className='border-b mb-4'>{CONTACT.email}</a>
        </div>
    </div>
  )
}

export default Contact
