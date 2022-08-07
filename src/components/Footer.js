import React from 'react'
import Logo from '../heart-blank.png'
import whatsapp from '../whatsapp.png'
import instagram from '../instagram.png'
import github from '../github.png'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
   <>
   <div className='footer-bg'>
    <div className='small-container'>
        <div className='footer-block gridBlock'>
            <div className='footer-content-item'>
                <h2>You belong here. <span><img src={Logo} alt={Logo.alt}/></span></h2>
                <p>MADE BY SUDHANSHU.</p>
            </div>
            <div className='footer-social-media'>
                <div className='links-section'>
                    <li><Link exact to="/">Home</Link></li>
                    <li><Link exact to="/about-me">About Us</Link></li>
                    <li><Link exact to="/new-blog">Add Blog</Link></li>
                </div>
                <ul className='footer-social-links'>
                
                <li><a href="https://www.instagram.com/sudhanshubatra_/"><img src={instagram} alt={instagram.alt}/></a></li>
                <li><a href="https://github.com/sudhanshu-designer"><img src={github} alt={github.alt}/></a></li>
                <li><a href="https://wa.me/9812233237"><img src={whatsapp} alt={whatsapp.alt}/></a></li>
                </ul>
            </div>
        </div>
    </div>
   </div>
   </>
  )
}
